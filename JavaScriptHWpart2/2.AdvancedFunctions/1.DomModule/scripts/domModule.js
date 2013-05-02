var domModule = function () {
	var BUFFER_SIZE = 100;
    var buffer = document.createDocumentFragment();

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
        var elements = document.querySelectorAll(elementSelector);
        for (var i = 0; i < elements.length; i++) {
            elements[i][eventType] = eventHandler;
        }
    }

    var addElementToBuffer = function (elementSelector, bufferName) {
        var elements = document.querySelectorAll(elementSelector);
        if (!buffer[bufferName]) {
            buffer[bufferName] = document.createDocumentFragment();
            buffer[bufferName].count = 0;
        }

        for (var i = 0; i < elements.length; i++) {
            buffer[bufferName].appendChild(elements[i]);
            buffer[bufferName].count++;
            if (buffer[bufferName].count >= BUFFER_SIZE) {
                appendAllElementsFrom(bufferName);
            }
        }
    }

    function appendAllElementsFrom(bufferName) {
        var fullBuffer = buffer[bufferName];
        var element = fullBuffer.childNodes[0];
        while (element) {
            domModule.addChild(element, bufferName);
            fullBuffer.count--;
            element = fullBuffer.childNodes[0];
        }
    }

    return {
        addChild: addChild,
        deleteChild: delChild,
        attachEvent: attachEv,
        addElementToBuffer: addElementToBuffer
    }
} ();
