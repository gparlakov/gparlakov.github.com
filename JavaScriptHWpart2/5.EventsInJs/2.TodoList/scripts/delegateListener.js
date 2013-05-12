(function () {
    var div = document.createElement("p"),
    prefix = ["moz", "webkit", "ms", "o"].filter(function (prefix) {
        return prefix + "MatchesSelector" in div;
    })[0] + "MatchesSelector";


    Element.prototype.addDelegateListener = function (type, selector, fn) {

        this.addEventListener(type, function (e) {
            var target = e.target;

            while (target && target !== this && !target[prefix](selector)) {
                target = target.parentNode;
            }

            if (target && target !== this) {
                return fn.call(target, e);
            }

        }, false);
    };
})();

 /* File Created: май 12, 2013 */