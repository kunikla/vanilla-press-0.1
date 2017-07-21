/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
let vanillaPress = {



    // clrPageTitle: function () {
    //     document.querySelector("#pageTitle").innerHTML = "";
    // },
    //
    // clrPageContent: function () {
    //     document.querySelector("#pageContent").innerHTML = "";
    // },
    //
    // clrPrimary: function () {
    //     vanillaPress.clrPageTitle();
    //     vanillaPress.clrPageContent();
    // },

    // clrSide: function () {
    //     document.querySelector(".sidebar").innerHTML = "";
    // },

    // clrContent: function () {
    //     vanillaPress.clrPrimary();
    //     vanillaPress.clrSide();
    //
    // },


    // displayList: function () {
    //     var item, curTitle, curLink;
    //
    //     for (curPost of posts) {
    //
    //         item = document.createElement("div");
    //
    //         curTitle = document.createElement("h3");
    //
    //         curLink = document.createElement("a");
    //         curLink.innerHTML = curPost.title;
    //         curLink.setAttribute("href", location.pathname + '#' + curPost.slug);
    //         curLink.classList.add("post-title");
    //         curLink.classList.add(curPost.slug);
    //
    //         curTitle.appendChild(curLink);
    //
    //         item.appendChild(curTitle);
    //         item.appendChild(document.createElement("hr"));
    //
    //         document.querySelector("#pageContent").appendChild(item);
    //     }
    // },
    //
    // displayPost: function (hash) {
    //
    //     for (curPost of posts) {
    //         if (("#" + curPost.slug) == hash) {
    //             document.querySelector("#pageTitle").innerHTML = curPost.title;
    //             document.querySelector("#pageContent").innerHTML = curPost.content;
    //             return true;
    //         }
    //     }
    //
    //     // document.querySelector("#pageContent").appendChild(document.createTextNode("Displaying " + hash + " page"));
    //     return false;
    // },
    //
    // display404: function (hash) {
    //     let page = hash.replace("#", ""),
    //         errMsg = document.createElement("div");
    //
    //     vpView.clrPrimary();
    //     errMsg.innerHTML = 'I\'m sorry, but the <span style="color:red">' + page + '</span> page does not exist!';
    //     document.querySelector("#pageContent").appendChild(errMsg);
    // },

    init: function () {

        vpModel.init();
        vpRouter.init();
        vpView.init();

    },

};
/******
 * End of vanillaPress object
 */



/******
 * Start of mainline code
 */
vanillaPress.init();

let slug = vpRouter.getPostSlugFromURL();

if (("" == slug)) {
    vpView.displayTitle("Posts");
    vpView.displayList();
} else if (vpModel.getPostBySlug(slug)) {
    vpView.displayCurPost();
} else {
    vpView.display404(slug);
}
