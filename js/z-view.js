/**
 * View file for displaying content
 */

/**
  * Main view object
  *
  */
 var view = {};

/**
  * Calls initial View methods
  *
  */
view.init = function() {

  view.loadBlogPosts();

};

/**
 * Gets blog posts and appends them to the page.
 *
 */

view.loadBlogPosts = function() {

  var posts = model.getPosts(),
      postsMarkup = document.createDocumentFragment(),
      primaryContentEl = helpers.getPageContentEl();

  for ( var i = 0, max = posts.length; i < max; i++ ) {

    postsMarkup.appendChild( view.createPostMarkup( posts[ i ]  ) );

  }

  primaryContentEl.appendChild( postsMarkup );

};

/**
 * Creates Markup for Blog Posts
 *
 * @param object {post} Post to create markup for
 * @return object {articleEl} Final post markup
 */

 view.createPostMarkup = function( post ) {

   var  articleEl = document.createElement( 'article' ),
        titleEl = document.createElement( 'h3' ),
        titleLink = document.createElement( 'a' ),
        titleText = document.createTextNode( post.title ),
        contentEl = document.createElement( 'div' );

  titleLink.appendChild( titleText );
  titleLink.href = '#' + post.slug;
  titleEl.appendChild( titleLink );

  contentEl.appendChild( document.createTextNode( post.content ) );

  articleEl.appendChild( titleEl );
  articleEl.appendChild( contentEl );

  return articleEl;

 };
