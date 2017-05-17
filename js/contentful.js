'use strict'

const SPACE_ID = 'km8hi8gevwyp'
const ACCESS_TOKEN = 'd57ffbe9cad1640774bff9c4674d57f99ad3e37c8e3148b2549eefe135823f61'
const BLOG_CONTENT_ID = '2wKn6yEnZewu2SCCkus4as'

const contentfulClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

let container = $('#blog_content');

contentfulClient.getEntries({
  'content_type': BLOG_CONTENT_ID
})
.then((response) => {
  console.log(response.items);
  renderPost(response.items);
})
.catch(console.error)

function renderPost(posts) {
  $.each(posts, function( index, post ) {
    console.log("POST", post.fields.title);
     container.append(
      "<div class='deepTopic'>" +
        "<h3>" + post.fields.title + "</h3>" +
        "<img src=" + "'" + post.fields.featuredImage.fields.file.url + "'" + ">" +
      "</div>" 
  )});
}


