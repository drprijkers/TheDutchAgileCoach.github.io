$(document).ready(function() {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the
        //nav bar to stick.
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 10) {
            $('.site_nav').addClass('site_nav_fixed');
        }
        if ($(window).scrollTop() < 10) {
            $('.site_nav').removeClass('site_nav_fixed');
        }
    });

});