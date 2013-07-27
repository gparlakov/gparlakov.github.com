 if (!Object.create) {
        Object.create = function (obj) {
            var f = function () { };
            f.prototype = obj;
            return new f();
        }
    }

    var Class = (function () {
        var create = function (properties) {
            var newObject = function () {
                this.init.apply(this, arguments);
            };

            newObject.prototype = {};

            for (var prop in properties) {
                newObject.prototype[prop] = properties[prop];
            }

            if (!newObject.prototype.init) {
                newObject.prototype.init = function () { };
            }

            return newObject;
        }

        return {
            create: create
        }
    })();

    Object.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        var prototype = new parent;
        this.prototype = Object.create(prototype);
        this.prototype._super = prototype;
        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

; var FavoritesControl = (function () {
    var Item = Class.create({
        init: function(title){
            this.title = title;
        }
    });

    var Url = Class.create({
        init: function (title, url) {
            this._super.init.apply(this, arguments);
            this.url = url;
        },
        render: function () {
            var anchor = document.createElement('a');
            anchor.innerHTML = '<a href=' + this.url + ' target="_blank">' + this.title + '</a>';
            return anchor;
        }
    });
    Url.inherit(Item);

    var Folder = Class.create({
        init: function (title, urls) {
            this._super.init.apply(this, arguments);
            this.nextId = 1;
            this.urls = Object.create({});
            if (urls) {
                this._addUrls(urls)
            }
        },
        _addUrls: function (urlsArray) {
            var i;
            var len = urlsArray.length;
            for (var i = 0; i < len; i++) {
                var nextUrl = urlsArray[i];
                this.addUrl(nextUrl.title, nextUrl.url);
            }
        },
        addUrl: function (title, url) {
            var newUrl = new Url(title, url);
            this.urls[this.nextId] = newUrl;
            this.nextId++;
        },
        render: function () {
            var folderElem = document.createElement('span');
            folderElem.innerHTML = this.title;
            folderElem.className = 'folderElement';
            return folderElem;
        },
        renderUrls: function () {
            var fragment = document.createDocumentFragment();
            var li = document.createElement('li');
            var u;
            
            for (u in this.urls) {
                var nextUrl = this.urls[u];
                if (nextUrl.render) {
                    var nextUrlLi = li.cloneNode();
                    var renderedUrl = nextUrl.render();
                    nextUrlLi.appendChild(renderedUrl);
                    fragment.appendChild(nextUrlLi);
                }
            }

            return fragment;
        }
    });
    Folder.inherit(Item);

    var FavoritesControl = Class.create({
        init: function () {
            this.parentElement = this.createParentElement();
            this.initEvents();     
            this.nextFolderId = 1;
            this.folders = Object.create({});
            
            this.nextUrlId = 1;
            this.urls = Object.create({});

        },
        createParentElement: function () {
            var parentElement = document.createElement('ul');
            parentElement.style.position = 'fixed';
            parentElement.style.top = '5px';
            parentElement.id = 'favoritesBar';
            return parentElement;
        },
        initEvents: function () {
            var that = this;
            var parent = this.parentElement;

            if (parent.addEventListener) {
                parent.addEventListener('click',that.eventFunc, false);
            }
            else if (parent.attachEvent) {
                parent.attachEvent('click',that.eventFunc);
            }
			else{
				parent.onclick = that.eventFunc;
			}           
        },
        eventFunc: function (ev) {            
            ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            if (target.className === 'folderElement') {
                var stopPropagation = ev.stopPropagation() || ev.preventDefault();
                if (this.renderedFolder) {
                    this.renderedFolder.outerHTML = '';
                }
                var folderId = target.parentElement.folderId;                
                var list = this.folders[folderId].renderUrls();
                var ul = document.createElement('ul');
                ul.appendChild(list);
                this.renderedFolder = ul;
                target.parentElement.appendChild(ul);
            }
            return false;
        },
        
        addFolder: function (title, urls) {
            var newFolder = new Folder(title, urls);
            this.folders[this.nextFolderId] = newFolder;
            this.nextFolderId++;
            return newFolder;
        },
        addUrl: function (title, url) {
            var newUrl = new Url(title, url);
            this.urls[this.nextUrlId] = newUrl;
            this.nextUrlId++;
            return newUrl;
        },
        render: function () {
            this.parentElement.innerHTML = '';
            var fragment = document.createDocumentFragment();
            var li = document.createElement('li');
            if (this.nextFolderId > 1) {
                for (var f in this.folders) {
                    var nextFolder = this.folders[f];
                    if (nextFolder.render) {
                        var newLiFolder = li.cloneNode();
                        newLiFolder.appendChild(nextFolder.render());
                        newLiFolder.folderId = f;
                        fragment.appendChild(newLiFolder);
                    }
                }
            }
            
            if (this.nextUrlId > 1) {
                for (var u in this.urls) {
                    var nextUrl = this.urls[u];
                    if (nextUrl.render) {
                        var newLiUrl = li.cloneNode();
                        newLiUrl.appendChild(nextUrl.render());
                        fragment.appendChild(newLiUrl);
                    }
                }
            }

            this.parentElement.appendChild(fragment);
            document.querySelector('body').appendChild(this.parentElement);
        }
    })

    return {        
        Controller:FavoritesControl
    }
})();

window.onload = function () {
    var controls = new FavoritesControl.Controller();
    
    var abv = controls.addUrl('abv', 'http://www.abv.bg');
    var academy = controls.addFolder('academy',
        [{ 'title': 'telerik', 'url': 'http://telerikacademy.com' },
        { 'title': 'forums', 'url': 'http://forums.telerikacademy.com' }]);
    controls.render();

    academy.addUrl('bgcoder', 'http://bgcoder.com');

    var moto = controls.addFolder('moto');
    moto.addUrl('moto-forum', 'http://motoforum.bg');
    moto.addUrl('motorika', 'http://motorikabg.com');
    controls.render();

}