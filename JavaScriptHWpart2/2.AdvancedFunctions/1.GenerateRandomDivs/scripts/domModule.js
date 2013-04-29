var domModule = function () {
    var addChild = function (element, parentSelector) {
        var parent = document.querySelector(parentSelector);
        parent.appendChild(element);
    }

    var delChild = function (elementSelector, parentSelector) {
        var parent = document.querySelector(parentSelector);
        var elem = parent.querySelector(elementSelector);
        elem.outerHTML = "";
    }

    var attachEv = function (elementSelector, eventType, eventHandler) {
        var elem = document.querySelectorAll(elementSelector);
        for (var i = 0; i < elem.length; i++) {
            elem[i][eventType] = eventHandler;            
        }
    }

    return {
        addChild: addChild,
        deleteChild: delChild,
        attachEvent:attachEv
    }
}();
