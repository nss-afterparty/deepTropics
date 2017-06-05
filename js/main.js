
//==================[ NAV CHANGE COLOR ON SCROLL ]================//
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#admat');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          // $('.nav-change-on-scroll').css('background-color', '#121313');
          $('.nav-change-on-scroll').css('border-bottom', '#262424 solid 1.25px');
          $('.nav-change-on-scroll').css('box-shadow', '0 0 0 3px black, 0 0 0 5px rgba(0,0,0,0.6), 0 0 0 6px #b700c0, 0 0 0 10px rgba(0,0,0,0.4), 0 0 0 10px #00180f, 0 0 0 12px rgb(0, 225, 255)');
          $('#mainNav').addClass('nav-border');
       } else {
          $('.nav-change-on-scroll').css('background-color', 'black');
          $('.nav-change-on-scroll').css('border-bottom', '');
          $('#mainNav').removeClass('nav-border');
          $('.nav-change-on-scroll').css('box-shadow', '-0.2px 0.2px 0 hsla(7.2, 60%, 45%, 1), -0.4px 0.4px 0 hsla(14.4, 60%, 45%, 1), -0.6px 0.6px 0 hsla(21.6, 60%, 45%, 1), -0.8px 0.8px 0 hsla(28.8, 60%, 45%, 1), -1px 1px 0 hsla(36, 60%, 45%, 1), -1.2px 1.2px 0 hsla(43.2, 60%, 45%, 1), -1.4px 1.4px 0 hsla(50.4, 60%, 45%, 1), -1.6px 1.6px 0 hsla(57.6, 60%, 45%, 1), -1.8px 1.8px 0 hsla(64.8, 60%, 45%, 1), -2px 2px 0 hsla(72, 60%, 45%, 1), -2.2px 2.2px 0 hsla(79.2, 60%, 45%, 1), -2.4px 2.4px 0 hsla(86.4, 60%, 45%, 1), -2.6px 2.6px 0 hsla(93.6, 60%, 45%, 1), -2.8px 2.8px 0 hsla(100.8, 60%, 45%, 1), -3px 3px 0 hsla(108, 60%, 45%, 1), -3.2px 3.2px 0 hsla(115.2, 60%, 45%, 1), -3.4px 3.4px 0 hsla(122.4, 60%, 45%, 1), -3.6px 3.6px 0 hsla(129.6, 60%, 45%, 1), -3.8px 3.8px 0 hsla(136.8, 60%, 45%, 1), -4px 4px 0 hsla(144, 60%, 45%, 1), -4.2px 4.2px 0 hsla(151.2, 60%, 45%, 1), -4.4px 4.4px 0 hsla(158.4, 60%, 45%, 1), -4.6px 4.6px 0 hsla(165.6, 60%, 45%, 1), -4.8px 4.8px 0 hsla(172.8, 60%, 45%, 1), -5px 5px 0 hsla(180, 60%, 45%, 1), -5.2px 5.2px 0 hsla(187.2, 60%, 45%, 1), -5.4px 5.4px 0 hsla(194.4, 60%, 45%, 1), -5.6px 5.6px 0 hsla(201.6, 60%, 45%, 1), -5.8px 5.8px 0 hsla(208.8, 60%, 45%, 1), -6px 6px 0 hsla(216, 60%, 45%, 1), -6.2px 6.2px 0 hsla(223.2, 60%, 45%, 1), -6.4px 6.4px 0 hsla(230.4, 60%, 45%, 1), -6.6px 6.6px 0 hsla(237.6, 60%, 45%, 1), -6.8px 6.8px 0 hsla(244.8, 60%, 45%, 1), -7px 7px 0 hsla(252, 60%, 45%, 1), -7.2px 7.2px 0 hsla(259.2, 60%, 45%, 1), -7.4px 7.4px 0 hsla(266.4, 60%, 45%, 1), -7.6px 7.6px 0 hsla(273.6, 60%, 45%, 1), -7.8px 7.8px 0 hsla(280.8, 60%, 45%, 1), -8px 8px 0 hsla(288, 60%, 45%, 1), -8.2px 8.2px 0 hsla(295.2, 60%, 45%, 1), -8.4px 8.4px 0 hsla(302.4, 60%, 45%, 1), -8.6px 8.6px 0 hsla(309.6, 60%, 45%, 1), -8.8px 8.8px 0 hsla(316.8, 60%, 45%, 1), -9px 9px 0 hsla(324, 60%, 45%, 1), -9.2px 9.2px 0 hsla(331.2, 60%, 45%, 1), -9.4px 9.4px 0 hsla(338.4, 60%, 45%, 1), -9.6px 9.6px 0 hsla(345.6, 60%, 45%, 1), -9.8px 9.8px 0 hsla(352.8, 60%, 45%, 1), -10px 10px 0 hsla(360, 60%, 45%, 1), 0px 0px 0px hsla(0,0%,0%,0)');
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

//==================[ CAROUSEL ]================//
$(document).ready(function(){
    
  var clickEvent = false;
  $('#myCarousel').carousel({
    interval:   3000  
  }).on('click', '.list-group li', function() {
      clickEvent = true;
      $('.list-group li').removeClass('active');
      $(this).addClass('active');   
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.list-group').children().length -1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.list-group li').first().addClass('active'); 
      }
    }
    clickEvent = false;
  });
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
  $('#myCarousel .list-group-item').outerHeight(triggerheight);
});

//=================================[ BOOTSTRAP GALLERY ]====================================//
$('.thumbnail').click(function($e){
    $e.preventDefault();
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#galleryModal').modal({show:true});
});

$('#next-btn').click(function() {
 var link = $('.modal-body a');
  var number = parseInt(link.attr('title').match(/\S+$/));
  number++;
  if(number === 13) {
  number = 1;
  }
  $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
  $('.modal-title').text('Image ' + number);
});
$('#prev-btn').click(function() {
 var link = $('.modal-body a');
  var number = parseInt(link.attr('title').match(/\S+$/));
  number--;
  if(number === 0) {
  number = 12;
  }
  $('.modal-body').html($('#img-container').find('a[title="Image ' + number + '"]').parent('div').html());
  $('.modal-title').text('Image ' + number);
});

//=================================[ MOBILE ANIMATED X ]====================================//
$(".example5").click(function(){ $(this).toggleClass("open"); });
