$(document).ready(function (){
    $('#scroll li a').click(function() {
        var target = $(this).attr('id');
        $('html, body').animate({scrollLeft: $('#'+target+'_content').offset().left - 230 }, 800);

        return false;

    });
});





/*$(document).ready(function() {

    $('ul.nav a').bind('click', function(event) {
        var $anchor = $(this);

        if you want to use one of the easing effects:
        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1500,'easeInOutExpo');

        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left - 300
        }, 1000);
        event.preventDefault();
    });
});*/