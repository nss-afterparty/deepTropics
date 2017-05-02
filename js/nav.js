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