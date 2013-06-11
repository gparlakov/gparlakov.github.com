var sliderControl = {
    parentElem: {},
    initialize:function (selector) {
        this.parentElem = $(selector).get(0);
        $(this.parentElem).toggleClass("slider-parent");
        this.initEvents();
    },
    addElement: function (content) {
        var elem = $(content);
        elem.hide();
        elem.toggleClass('slide');
        $(this.parentElem).append(elem);
        return elem;
    },
    render: function () {        
        $(this.parentElem).find('.slide').first().slideDown().toggleClass('selected');
    },
    initEvents: function () {
        $(this.parentElem).on('click', 'button', function (event) {
            event.stopPropagation();
            event.preventDefault();
            var slider = $(this).closest('.slider-parent');
            var selected = slider.find('.selected');

            if ($(this).hasClass("left")) {                
                var prev = selected.prev('.slide');
                if (prev.length == 0) {
                    prev = slider.find('.slide').last();
                }

                selected.toggleClass('selected').slideToggle();
                prev.toggleClass('selected').slideToggle();
            }

            if ($(this).hasClass("right")) {
                var next = selected.next('.slide');
                if (next.length == 0) {
                    next = slider.find('.slide').first();
                }

                selected.toggleClass('selected').slideToggle();
                next.toggleClass('selected').slideToggle();
            }
        });
    }
};

$(document).ready(function () {
    sliderControl.initialize("#slider-holder");
    sliderControl.addElement("<ul><li>1</li><li>1</li><li>1</li></ul>");
    //sliderControl.addElement("<img src=\"images/img1.jpg\" \/>");
    sliderControl.addElement("<a href=#>Click me</a>");
    sliderControl.render();
});