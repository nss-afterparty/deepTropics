'use strict'

const SPACE_ID = 'km8hi8gevwyp'
const ACCESS_TOKEN = 'd57ffbe9cad1640774bff9c4674d57f99ad3e37c8e3148b2549eefe135823f61'
const BLOG_CONTENT_ID = '2wKn6yEnZewu2SCCkus4as'
let container = $('#blog_content');
let carousel = $('.carousel-inner');
let carouselSide = $('#carousel-side-options');


//============================[ CONTENTFUL SETUP ]===============================//
const contentfulClient = contentful.createClient({
  // The spaceID is like a project folder in Contentful terms
  space: SPACE_ID,
  // Access token for this space
  accessToken: ACCESS_TOKEN
})

//============================[ GET BLOGS POSTS ]===============================//
contentfulClient.getEntries({
  'content_type': BLOG_CONTENT_ID
})
.then((response) => {
  console.log(response.items);
  renderPost(response.items);
})
.catch(console.error)


//============================[ RENDER POSTS ]===============================//
function renderPost(posts) {
  $.each(posts, function( index, post ) {
    if (index === 0) {
      carousel.append(
        "<div class='item active'>" +
          "<img class='carousel-img' src='" + post.fields.featuredImage.fields.file.url + "'>" +
           "<div class='carousel-caption'>" +
            "<h4><a href='#'>consetetur sadipscing elitr, sed diam nonumy eirmod</a></h4>" +
            "<p> irmod tempor liquyam erat. <a class='label label-primary' href='http://espn.com/' target='_blank'>READ MORE</a></p>" +
          "</div>" +
        "</div><!-- End Item -->"
      );

      carouselSide.append(
        "<li data-target='#myCarousel' data-slide-to='" + index + "' class='list-group-item active'><h4>" + post.fields.title + "</h4></li>"
      );
    } else if (index > 0 && index <= 4) {
      carousel.append(
        "<div class='item'>" +
          "<img class='carousel-img' src='" + post.fields.featuredImage.fields.file.url + "'>" +
           "<div class='carousel-caption'>" +
            "<h4><a href='#'>consetetur sadipscing elitr, sed diam nonumy eirmod</a></h4>" +
            "<p> irmod tempor liquyam erat. <a class='label label-primary' href='http://espn.com/' target='_blank'>READ MORE</a></p>" +
          "</div>" +
        "</div><!-- End Item -->"
      );

      carouselSide.append(
        "<li data-target='#myCarousel' data-slide-to='" + index + "' class='list-group-item active'><h4>" + post.fields.title + "</h4></li>"
      );
    } else {
    console.log("POST", post.fields.title);
     container.append(
      "<div class='deepTopic'>" +
        "<h3>" + post.fields.title + "</h3>" +
        "<img src=" + "'" + post.fields.featuredImage.fields.file.url + "'" + ">" +
      "</div>" 
  )}});
}


