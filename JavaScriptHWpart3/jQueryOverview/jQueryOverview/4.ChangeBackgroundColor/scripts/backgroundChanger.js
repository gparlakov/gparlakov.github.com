$(document).ready(function () {
    var changeColor = function () {
        $('body').css('background-color', $('.background-changer').val());
    };

    //$(document).append($("<input type='color' class='background-changer'\/>"));
    $('.background-changer').on('change', changeColor).on('mouseenter', changeColor)/*.on('mouseleave', function () {
        $('body').css('background-color',"white");
    });*/
});