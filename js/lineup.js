"use strict";
(function() {
console.log('HEY HEY HEY');

$.getJSON( "/lineup.json", function( data ) {
    console.log('data', data);

  $.each( data, function( key, val ) {
    console.log('value', val);
    let artistId = val.artist.toUpperCase();
    let artistImg = val.image;

    $('#artist-container').append("<div class='card card-inverse col-sm-4 col-xs-6 col-md-3 col-lg-3'>" + "<a href='#' title=" + "'" + key + "'>" + "<div class='card artist-thumbnail' id='" + key + "'>" + "<div class='artist-title card-content'>" + "<h2 class='card-title'>" + artistId + "</h2>" + "</div>" + "</div>" + "</a>" + "</div>");

    $('#'+key).css('background-image', 'url(' + artistImg + ')');
  });
});

})();


