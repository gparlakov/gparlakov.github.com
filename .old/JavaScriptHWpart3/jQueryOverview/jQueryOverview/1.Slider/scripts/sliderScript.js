var sliderControl = {
    parentElem: null,
    slideShowInterval: 5000,
    initialize:function (selector, slideShowInterval) {
        this.parentElem = $(selector).get(0);
        $(this.parentElem).toggleClass("slider-parent");
        this.initEvents();
        if (slideShowInterval) {
            this.slideShowInterval = slideShowInterval;            
        }
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
            var clicked = $(this);
            var slider = $(this).closest('.slider-parent');
            var selected = slider.find('.selected');

            if (clicked.hasClass("left")) {
                var prev = selected.prev('.slide');
                if (prev.length == 0) {
                    prev = slider.find('.slide').last();
                }

                selected.toggleClass('selected').slideToggle();
                prev.toggleClass('selected').slideToggle();
            }

            if (clicked.hasClass("right")) {
                var next = selected.next('.slide');
                if (next.length == 0) {
                    next = slider.find('.slide').first();
                }

                selected.toggleClass('selected').slideToggle();
                next.toggleClass('selected').slideToggle();
            }

            if (clicked.hasClass("middle")) {
                if (sliderControl.slideShowIndervalObj) {
                    clearInterval(sliderControl.slideShowIndervalObj);
                    clicked.html("Start Slideshow");
                    sliderControl.slideShowIndervalObj = null;
                }
                else {
                    sliderControl.startSlideShow();
                    clicked.html("Stop Slideshow");
                }
            }
        });        
    },
    startSlideShow: function () {
        var that = this;

        //starts interval slideshow changing
        this.slideShowIndervalObj = setInterval(function () {
            var selected = $(that.parentElem).find('.selected');
            var next = selected.next().first();
            if (next.length == 0) {
                next = $(that.parentElem).find('.slide').first();
            }

            selected.fadeOut(200);
            selected.toggleClass('selected');
            next.fadeIn(600);
            next.toggleClass('selected');
        }, this.slideShowInterval);
    }
};

$(document).ready(function () {
    sliderControl.initialize("#slider-holder");

    sliderControl.addElement("<ul><li>1</li><li>1</li><li>1</li></ul>");
    sliderControl.addElement("<img src=\"images/img1.jpg\"  \/>");
    sliderControl.addElement("<a href=#>Click me</a>");
    var anotherButton = $('<button>another button</button>');
    sliderControl.addElement(anotherButton);
    sliderControl.addElement("<h1>Header</h1>");
    sliderControl.addElement("<div class=\"red\">a red div</div>");
    sliderControl.addElement("<p>ordinary p elem</p>");
    sliderControl.addElement("<form><label for='textInput'>cyk here</label><input type='text' id='textInput' placeholder='text input'/></form>");

    sliderControl.render();
});