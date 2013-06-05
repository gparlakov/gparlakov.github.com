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
            anchor.innerHTML = '<a href=' + this.url + ' _target="blank">' + this.title + '</a>';
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
            folderElem.innerHTML = '<span class = "folder">' + this.title + '</span>';
            return folderElem;
        },
        renderUrls: function () {

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
            var parentElement = document.createElement('div');
            parentElement.style.position = 'fixed';
            parentElement.style.top = '5px';
            parentElement.className = 'favoritesBar';

            return parentElement;
        },
        initEvents: function () {

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
            var fragment = document.createDocumentFragment();
            if (this.nextFolderId > 1) {
                for (var f in this.folders) {
                    var nextFolder = this.folders[f];
                    if (nextFolder.render) {
                        fragment.appendChild(nextFolder.render());
                    }
                }
            }
            
            if (this.nextUrlId > 1) {
                for (var u in this.urls) {
                    var nextUrl = this.urls[u];
                    if (nextUrl.render) {
                        fragment.appendChild(nextUrl.render());
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
    var moto = controls.addFolder('moto',
        [{ 'title': 'telerik', 'url': 'http://telerikacademy.com' },
        { 'title': 'forums', 'url': 'http://forums.telerikacademy.com' }]);
    controls.render();
}