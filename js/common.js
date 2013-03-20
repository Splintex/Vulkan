$(document).ready(function() {

    $(".js-key").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            $(this).children().animate({
                left: -1,
            }, 200);
            $(this).children().text("off");
        }
        else {
            $(this).addClass("js-active");
            $(this).children().animate({
                left: 27,
            }, 200);
            $(this).children().text("on");
        }
    });

});