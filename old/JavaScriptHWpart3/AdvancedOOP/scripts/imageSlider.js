/*shim for object create, extend and createAndInit function for 
intitalizing an object in one step */
; (function () {
    if (!Object.create) {
        Object.create = function (obj) {
            var f = function () { };
            f.prototype = obj;
            return new f();
        }
    }

    Object.prototype.extend = function (properties) {
        var f = function () { };
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;

        return new f();
    }

    /*@Creates an object and gives him the init arguments
    *@that you specify: createAndInit(Person,"Name","Age","LName", etc.)
    */
    Object.prototype.createAndInit = function () {
        var obj = arguments[0];
        var len = arguments.length;
        var args = [];
        for (var i = 1; i < len; i++) {
            args.push(arguments[i]);
        }

        var newObj = Object.create(obj);
        newObj.init.apply(newObj, args);

        return newObj;
    }
})();

//got it to work down to ie8 
//(ie7 was impossible -> can't add smth to prototype)
Element.prototype.addEventHandler = function (event, func) {
    if (document.addEventListener) {
        return document.addEventListener(event, func, false);
    }

    if (document.attachEvent) {
        return document.attachEvent('on' + event, func);
    }

    var addEventHandler = function (event, func) {
        var onevent = 'on' + event;
        this[onevent] = func;
    };

    return addEventHandler;
};

var SliderControl = (function () {
    var Image = {
        init: function (title, urlThumb, urlBig) {
            this.title = title;
            this.urlThumb = urlThumb;
            this.urlBig = urlBig;
        },
        renderThumbnail: function () {
            var img = document.createElement('img');
            img.setAttribute('src', this.urlThumb);
            //img.setAttribute('width', '80px');
            //img.setAttribute('height', '80px');
            img.className = 'thumbnail';
            img.setAttribute('title', this.title);

            //takes this attribute from clicked thumbnail
            img.setAttribute('srcBiggerPic', this.urlBig);

            return img;
        }//,
        //renderBig: function () {
        //    var img = document.createElement('img');
        //    img.setAttribute('src', this.urlBig);
        //    img.setAttribute('width', '400px');
        //    img.setAttribute('height', '400px');
        //    img.setAttribute('title', this.title);

        //    return img;
        //}
    };

    var Button = {
        init: function (title, buttonImageUrl) {
            this.title = title;
            this.imageUrl = buttonImageUrl;
        },
        //setParentElem: function (parentElem) {
        //    this.parentElement = parentElem;
        //},
        render: function () {
            var button = document.createElement('button');
            button.setAttribute('style', 'background-image:url(\'' + this.imageUrl + '\');');
            
            return button;
        }        
    };

    var Controller = {
        //kinda const string ...
        slideRightClassName: 'slideRightButton',
        slideLeftClassName: 'slideLeftButton',
        //takes 'parentelem' - dom element or queryString    
        init: function (parentElement) {
            if (typeof parentElement === 'string') {
                parentElement = document.querySelector(parentElement);
            }
            this.parentElement = parentElement;
            this.initEvents();
            this.images = {};            
            this.nextId = 1;
        },
        initEvents: function () {
            var that = this;
            this.parentElement.addEventHandler('click', function (ev) {
                if (!ev) {
                    ev = window.event;
                }
                if (ev.stopPropagation) {
                    ev.stopPropagation();
                }
                if (ev.preventDefault) {
                    ev.preventDefault();
                }

                var target = ev.target || ev.srcElement;

                if (target instanceof HTMLImageElement &&
                    target.className === 'thumbnail') {
                    that.showBigImage(target);
                }

                if (target.className === 'slideLeftButton') {
                    that.showNextLeft();//todo
                }

                if (target.className === 'slideRightButton') {
                    that.showNextRight();//todo
                }

                return false;
            }, false)
        },
        addImage: function (imgObject) {
            var newImage = Object.createAndInit(
                Image, imgObject.title, imgObject.urlThumb, imgObject.urlBig);
            this.images[this.nextId] = newImage;
            this.nextId++;
        },
        showThumbnails: function () {
            var fragment = document.createDocumentFragment();

            for (var i in this.images) {
                if (this.images[i].renderThumbnail) {
                    var nextImage = this.images[i].renderThumbnail();
                    nextImage.sliderId = i;                
                    fragment.appendChild(nextImage);
                }
            }
            
            this.parentElement.appendChild(fragment);
        },
        clearSmallImages: function () {
            var i;
            var children = this.parentElement.childNodes;
            
            for (i = 0; i < children.length; i++) {
                if (children[i].className === 'thumbnail') {
                    this.parentElement.removeChild(children[i]);
                    i--;
                }
            }
        },
        showBigImage: function (imageElem) {
            this.removeBigImage();
            var bigImage = document.createElement('img');
            var srcBigImage = imageElem.urlBig || imageElem.getAttribute('srcBiggerPic');
            bigImage.setAttribute('src', srcBigImage);
            bigImage.setAttribute('class', 'bigImage');
            this.bigImage = bigImage;            
            this.parentElement.appendChild(bigImage);
            this.renderButtons();
            this.bigImageSliderId = imageElem.sliderId ;
        },
        removeBigImage: function () {
            if (this.bigImage) {
                this.parentElement.removeChild(this.bigImage);
            }
        },
        renderThumbnail: function () {
            this.clearSmallImages();
            this.removeBigImage();
            this.showThumbnails();
        },
        addButton: function (position, imageUrl) {
            switch (position) {
                case 'left': {
                    var button = Object.createAndInit(Button,
                        'left', imageUrl);
                    this.leftButton = button.render();
                    this.leftButton.className = this.slideLeftClassName;
                    break;
                }
                case 'right': {
                    var button = Object.createAndInit(Button,
                        'right', imageUrl);
                    this.rightButton = button.render();
                    this.rightButton.className = this.slideRightClassName;
                    break;
                }
                default: { break; }
            }
        },
        renderButtons: function () {
            this.parentElement.appendChild(this.leftButton);
            this.parentElement.appendChild(this.rightButton);
        },
        showNextLeft: function (elem) {
            var id = parseInt(this.bigImageSliderId);            
            var nextLeft = id - 1;
            if (nextLeft < 1) {
                nextLeft = this.nextId - 1;
            }
            this.images[nextLeft].sliderId = nextLeft;
            this.showBigImage(this.images[nextLeft]);
        },
        showNextRight: function (elem) {
            var id = parseInt(this.bigImageSliderId);
            var nextRight = id + 1;
            if (nextRight >= this.nextId) {
                nextRight = 1;
            }
            this.images[nextRight].sliderId = nextRight;
            this.showBigImage(this.images[nextRight]);
        }
    }

    return {
        Controller:Controller
    }
})();

window.onload = function () {
    var controls = Object.createAndInit(SliderControl.Controller, '#slider');
    controls.addButton('left', 'images/arrow_left.png');
    controls.addButton('right', 'images/arrow_right.png');

    controls.addImage({
        'title': 'image1',
        'urlThumb': 'images/img1Thumb.jpg',
        'urlBig': 'images/img1.jpg'
    });
    controls.addImage({
        'title': 'image2',
        'urlThumb': 'images/img2Thumb.jpg',
        'urlBig': 'images/img2.jpg'
    });
    controls.addImage({
        'title': 'image3',
        'urlThumb': 'images/img3Thumb.jpg',
        'urlBig': 'images/img3.jpg'
    });
    controls.addImage({
        'title': 'image4',
        'urlThumb': 'images/img4Thumb.jpg',
        'urlBig': 'images/img4.jpg'
    });

    controls.renderThumbnail();

    controls.addImage({
        'title': 'image1',
        'urlThumb': 'images/img1Thumb.jpg',
        'urlBig': 'images/img1.jpg'
    });
    controls.addImage({
        'title': 'image2',
        'urlThumb': 'images/img2Thumb.jpg',
        'urlBig': 'images/img2.jpg'
    });
    controls.addImage({
        'title': 'image3',
        'urlThumb': 'images/img3Thumb.jpg',
        'urlBig': 'images/img3.jpg'
    });
    controls.addImage({
        'title': 'image4',
        'urlThumb': 'images/img4Thumb.jpg',
        'urlBig': 'images/img4.jpg'
    });

    controls.addImage({
        'title': 'image1',
        'urlThumb': 'images/img1Thumb.jpg',
        'urlBig': 'images/img1.jpg'
    });
    controls.addImage({
        'title': 'image2',
        'urlThumb': 'images/img2Thumb.jpg',
        'urlBig': 'images/img2.jpg'
    });
    controls.addImage({
        'title': 'image3',
        'urlThumb': 'images/img3Thumb.jpg',
        'urlBig': 'images/img3.jpg'
    });
    controls.addImage({
        'title': 'image4',
        'urlThumb': 'images/img4Thumb.jpg',
        'urlBig': 'images/img4.jpg'
    });

    controls.renderThumbnail();

};