"use strict";
(function() {

//=================================[ Lineup Card Creation ]====================================//
$.getJSON( "/lineup.json", function( data ) {
    console.log('data', data);

  $.each( data, function( key, val ) {
    console.log('value', val);
    let artistName = val.artist.toUpperCase();
    let artistImg = val.image;
    let artistBio = val.bio;
    createModal(key, artistName, artistImg, artistBio);


    $('#artist-container').append("<div type='button' " +  "data-toggle='modal'" + "data-target='a" + key + "'" + "class='card card-inverse col-sm-4 artist-thumbnail col-xs-6 col-md-3 col-lg-3'>" + "<div class='card' id='" + key + "'>" + "<div class='artist-title card-content'>" + "<h2 class='card-title'>" + artistName + "</h2>" + "</div>" + "</div>" + "</div>");

    $('#'+key).css('background-image', 'url(' + artistImg + ')');
  });
});

//=================================[ Modal Creation ]====================================//
let createModal = function(key, artistName, artistImg, artistBio) {
    // console.log('name, artistBio, image', key, artistName, artistBio, artistImg);

    let html = '<div class="modal fade"' + 'id="a' + key + '"' + 'tabindex="-1" role="dialog" aria-labelledby="' + artistName + '" aria-hidden="true">';
    html += '<div class="modal-dialog" role="document">';
    html += '<div class="modal-content">';
    html += '<div class="modal-header">';
    html += '<h5 class="modal-title"' + '>' + artistName + '</h5>';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    html += '<span aria-hidden="true">&times;</span>';
    html += '</button>';
    html += '</div>'; //header
    html += '<img src="' + artistImg + '"' + '>';
    html += '<div class="modal-body">';
    html += artistBio;
    html += '</div>';
    html += '<div class="modal-footer">'; 
    html += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'; 
    html += '</div>'; //footer
    html += '</div>'; //content
    html += '</div>'; //dialog
    html += '</div>'; //modal
    $('#artist-container').append(html);
}

//=================================[ Modal Listner ]====================================//
$('#artist-container').on('click', '.artist-thumbnail', function(){
    console.log('this', event.target.id);
    $('#a' + event.target.id).modal({show:true});
});

})();


