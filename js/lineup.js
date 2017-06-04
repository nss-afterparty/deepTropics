"use strict";
(function() {
console.log('HEY HEY HEY');

$.getJSON( "/../lineup.json", function( data ) {
    console.log('data', data);

  $.each( data, function( key, val ) {
    console.log('value', val);
    $('#artist-container').append("<div class='col-sm-4 col-xs-6 col-md-3 col-lg-3 portfolio-item' id=" + key + ">" + "<a href='#'>" + "<img class='img-responsive artist-img'" + "src='" + val.image + "'" + "alt='" + val.artist + "'>" + "</a>" + "</li>");
  });
});

})();

// <div class="row">
//   <div class="col-sm-4 col-xs-6 col-md-3 col-lg-3 portfolio-item">
//     <a href="#">
//       <img style="width: 450px" class="img-responsive" src="lineup_img/Gramatik.jpg" alt="Gramatik">
//     </a>
//   </div>
//   <div class="col-sm-4 col-xs-6 col-md-3 col-lg-3 portfolio-item">
//     <a href="#">
//       <img class="img-responsive" src="lineup_img/Bob_Moses.jpg" alt="Bob Moses">
//     </a>
//   </div>
//   <div class="col-sm-4 col-xs-6 col-md-3 col-lg-3 portfolio-item">
//     <a href="#">
//       <img class="img-responsive" src="lineup_img/Paper_Diamond.jpg" alt="Paper Diamond">
//     </a>
//   </div>
//   <div class="col-sm-4 col-xs-6 col-md-3 col-lg-3 portfolio-item">
//     <a href="#">
//       <img class="img-responsive" src="lineup_img/Troyboi.jpg" alt="Troyboi">
//     </a>
//   </div>
// </div>