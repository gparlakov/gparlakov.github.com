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

    Object.prototype.createAndInit = function () {
        var obj = arguments[0];
        var len = arguments.length;
        var args = [];
        for (var i = 1; i < len; i++) {
            args.push(arguments[i]);
        }

        var newObj = Object.create(obj);
        newObj.init(args);

        return newObj;
    }
})();