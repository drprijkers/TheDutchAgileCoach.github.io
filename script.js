/*jslint browser: true*/
/*global $, jQuery*/


$(document).ready(function () {
    "use strict";

$(window).load(function() {
   $(".btn-nav").on("click tap", function() {
     $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
     $(this).toggleClass("animated");
   });
 });


$("#hover_gone").hover(function()   {
    $(this).hide();
},
    function()  {
    $(this).show("span");
});

});

/*$("#hover_gone").mouseout(function()   {
    $(this).show("span");
    });*/

