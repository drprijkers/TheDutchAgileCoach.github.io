$(document).ready(function (){
        $('#scroll li').click(function() {
            var target = $(this).attr('id');
            $('html, body').animate({scrollTop: $('#'+target+'_content').offset().top - 245}, 1000);

            return false;

        });
});

/* top - xxx vervangen door waarde die height wegneemt van menu bar e.d. om exact te scrollen?*/
