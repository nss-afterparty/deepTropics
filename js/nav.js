
//==================[ NAV CHANGE COLOR ON SCROLL ]================//
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#about');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav-change-on-scroll').css('background-color', 'rgb(14, 14, 14)');
          $('#mainNav').addClass('nav-border');
       } else {
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
