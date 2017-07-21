# Vanilla Press by kunikla, Version 0.1

###Assignment for JavaScript for WordPress, by Zac Gordon
* Lesson 1.6.04 - The Model
* Lesson 1.6.05 - The View
* Lesson 1.6.06 - The Router

I listened to the lectures to understand the desired behavior, but the JS coding is my own.

###Release Notes
* Version 0.1.1 - 7/21/17 - after watching 1.6.06
  * vpModel (js/model.js)
    * use window.localStorage instead of localStorage
    * fetchPosts() now deals with empty windows.localStorage
    * sortPosts() and init() now deal with empty allPosts[]
    * event listeners initDB() and clrDB() created
    * removed code that was commented out
  * vpRouter (js/router.js)
    * use window.location instead of location
    * goToNewPage() created to display page when user clicks on a link
    * goToNewPage() calls vpView methods to display appropriate Primary Content
    * linkToListStub(), linkListStub() and linkStub() removed
    * getCurPostName() and getPostLinkFromSlug() removed
  * vpView (js/view.js)
    * init no longer clears the Primary Content
    * init no longer sets event handler on page title
    * displayCurPost(), displayList(), and display404() now clear the Primary Content (just a formality)
    * displayList() no longer adds event handler to links
  * vanillaPress (js/app.js)
    * mainline code calls goToNewPage
    * removed code that was commented out
  * HTML (index.html)
    * divided header into 3 divs: logo, title, buttons for database
    * added second heart in footer
  * CSS (css/styles.css)
    * added styling for the new divs in the header
    * changed color of links to green
    * changed font for h1 in page-header to green

* Version 0.1.0 - 07/21/17
  * Initial upload
