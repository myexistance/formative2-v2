$(document).ready(function(){
    $("#about").click(function (){
               $('html, body').animate({
                   scrollTop: $("#img-about").offset().top
               }, 1000);
           });
});