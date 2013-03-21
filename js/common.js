$(document).ready(function() {

    $(".key button").click(function(){
        $(".js-keys button").removeClass("is-active");
        $(this).addClass("is-active");
    });

});