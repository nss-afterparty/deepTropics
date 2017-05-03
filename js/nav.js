$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.start-change');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#mainNav').css('background-color', '#252525');
       } else {
          $('#mainNav').css('background-color', 'black');
       }
   });
});

jQuery(function($) {
$('.btn-group').hover(function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(175).slideDown();
}, function() {
$(this).find('.dropdown-menu').first().stop(true, true).delay(350).slideUp();
});});


setTimeout(function() {
    $('#myModal').modal();
}, 12000);