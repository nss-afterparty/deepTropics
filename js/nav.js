//==================[ NAV CHANGE COLOR ON SCROLL ]================//
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#about');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          // $('#mainNav').css('background-color', '#252525');
          // $('#deep-nav').css('background-color', '#252525');
          $('.nav-change-on-scroll').css('background-color', '#252525');
          $('#mainNav').addClass('nav-border');
       } else {
          // $('#mainNav').css('background-color', 'black');
          // $('#deep-nav').css('background-color', 'black');
          $('.nav-change-on-scroll').css('background-color', 'black');
          $('#mainNav').removeClass('nav-border');
       }
   });
});

//==================[ DROPDOWN HOVER ]================//
jQuery(function($) {
$('.btn-group').hover(function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(175).slideDown();
}, function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(350).slideUp();
});});


//==================[ E-LIST MODAL POP-UP ]================//
setTimeout(function() {
    $('#myModal').modal();
}, 13000);

// CAROUSEL

// $(document).ready(function(){
//   var clickEvent = false;
//   $('#myCarousel').carousel({
//     interval:   4000  
//   }).on('click', '.list-group li', function() {
//       clickEvent = true;
//       $('.list-group li').removeClass('active');
//       $(this).addClass('active');   
//   }).on('slid.bs.carousel', function(e) {
//     if(!clickEvent) {
//       var count = $('.list-group').children().length -1;
//       var current = $('.list-group li.active');
//       current.removeClass('active').next().addClass('active');
//       var id = parseInt(current.data('slide-to'));
//       if(count == id) {
//         $('.list-group li').first().addClass('active'); 
//       }
//     }
//     clickEvent = false;
//   });
// });
// $(window).load(function() {
//     var boxheight = $('#myCarousel .carousel-inner').innerHeight();
//     var itemlength = $('#myCarousel .item').length;
//   var triggerheight = Math.round(boxheight/itemlength+1);
//   $('#myCarousel .list-group-item').outerHeight(triggerheight);
// });




