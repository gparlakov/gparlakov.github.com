;(function () {
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

    /*Create an object and gives him the init arguments
    *that you specify: createAndInit(Person,"Name","Age","LName", etc.)
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
        init: function (url) {
            this.url = url;
        },
        render: function () {
            var img = document.createElement('img');
            img.setAttribute('src', this.url);
            img.setAttribute('width', '80px');
            img.classList.toggle('smallImage');
            return img;
        }
    };

    var Controller = {
        //takes 'parentelem' - dom element or queryString
        //and 'images' -> object {'url':'../images/fdfd','url':'anotherImage'}        
        init: function (parentElement, images) {
            if (typeof parentElement === 'string') {
                parentElement = document.querySelector(parentElement);
            }
            this.parentElement = parentElement;
            this.addImages(images);
            this.initEvents();
            //this.showSmallImages();
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

                if (target instanceof HTMLImageElement) {
                    that.showEnlargedImage(target);
                }
                return false;
            }, false)
        },
        addImage: function (imgObject) {
            var newImage = Object.createAndInit(Image, imgObject.url);
            this.images.push(newImage);
        },
        addImages: function (images) {
            var i;
            if (!this.images) {
                this.images = [];
            }
            for (i in images) {
                if (typeof images[i] === 'string') {
                    this.addImage({ 'url': images[i] })
                }
            }
        },
        showSmallImages: function () {
            var fragment = document.createDocumentFragment();
            var len = this.images.length;
            for (var i = 0; i < len; i++) {
                fragment.appendChild(this.images[i].render());
            }
            
            this.parentElement.appendChild(fragment);
        },
        clearSmallImages: function () {
            var i;
            var children = this.parentElement.childNodes;
            
            for (i = 0; i < children.length; i++) {
                if (children[i].classList.contains('smallImage')) {
                    this.parentElement.removeChild(children[i]);
                    i--;
                }
            }
        },
        showEnlargedImage: function (imageElem) {
            this.removeBigImage();
            var bigImage = document.createElement('img');
            bigImage.setAttribute('src', imageElem.getAttribute('src'));
            bigImage.setAttribute('width', '400px');
            bigImage.style.display = 'block';
            bigImage.style.margin = '0 auto';
            bigImage.classList.toggle('bigImage');
            this.bigImage = bigImage;            
            this.parentElement.appendChild(bigImage);
        },
        removeBigImage: function () {
            if (this.bigImage) {
                this.parentElement.removeChild(this.bigImage);
            }
        },
        render: function () {
            this.clearSmallImages();
            this.removeBigImage();
            this.showSmallImages();
        }
    }

    return {
        Controller:Controller
    }
})();

window.onload = function () {
    var images = { 'url1': 'images/img1.jpg', 'url2': 'images/img2.jpg' };
    var controls = Object.createAndInit(SliderControl.Controller, '#slider', images);
    controls.render();

    controls.addImage({ 'url': 'images/img3.jpg' });
    controls.addImage({ 'url': 'images/img4.jpg' });

    controls.render();

    //var button = document.createElement('button');
    //button.innerHTML = 'Add image';
    //button.onclick = function () {
    //    var newImageUrl = document.querySelector('.newImageUrlInput').value;
    //    controls.addImage({ 'url': newImageUrl });
    //    controls.render();
    //};
    ////button.addEventHandler('click', function () {
    ////    var newImageUrl = document.querySelector('.newImageUrlInput').value;
    ////    controls.addImage({ 'url': newImageUrl });
    ////    controls.render();
    ////}, false)


    //var input = document.createElement('input');
    //input.setAttribute('type', 'text');
    //input.setAttribute('class', 'newImageUrlInput');
    //input.setAttribute('value', 'images/img3.jpg');
    //var body = document.querySelector('body');
    //body.appendChild(button);
    //body.appendChild(input);
};