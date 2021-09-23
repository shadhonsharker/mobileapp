$(document).ready (function(){
    $(".barger-nav").on("click", function(){
        $(".container nav ul").toggleClass("open");
    })
    
    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animate animate__animated animate__slideInUp');
    }, {
        offset: '60%'
       });
       $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animate animate__animated animate__fadeIn');
    }, {
        offset: '60%'
       });

       $(".iphone_button").delay(2200).animate({bottom:"+=-2"},300);
       $(".iphone_button").delay(300).animate({top:"+=-2"},100)
});