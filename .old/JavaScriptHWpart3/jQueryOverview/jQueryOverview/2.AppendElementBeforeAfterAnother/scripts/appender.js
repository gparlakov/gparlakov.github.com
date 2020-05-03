var elementAppender = function (existingElement, newElement, appendAfter) {
    var newElem = $(newElement);
    var existingElem = $(existingElement);

    if (appendAfter) {
        newElem.insertAfter(existingElem);
    }
    else {
        newElem.insertBefore(existingElem);
    }
}

$(document).ready(function () {
    setTimeout(function () { elementAppender('div', "<a>appender -> true -> after</a>", true); }, 1000);
    setTimeout(function () { elementAppender('div', "<a>appender -> false -> before</a>", false); }, 2000);

});