
/**
 * Router file for managing url changes
 */

var vpRouter = {

    /******
     * Event handler code to make it look like we're
     * linking to another page
     *
     */
    linkStub: function (e) {
        let curTitleLinkElem = e.target;

        console.log("Reloading page");
        curTitleLinkElem.classList.remove("post-title");
        location.hash = "#" + curTitleLinkElem.classList[0];
        curTitleLinkElem.classList.add("post-title");
        window.setTimeout(location.reload(true), 2000);

        // let curTitle = e.target,
        //     hash = "";
        //
        // curTitle.classList.remove("post-title");
        // hash = "#" + curTitle.classList[0];
        // curTitle.classList.add("post-title");
        //
        // vpView.clrPrimary();
        // vpView.displayPost(hash);
    },

    addLinkStubs: function () {

        let listTitles = document.querySelectorAll(".post-title");

        for (curTitle of listTitles) {
            curTitle.addEventListener("click", vpRouter.linkStub);
        }
    },

    linkToListStub: function (e) {
        vpView.clrPrimary();
        vpView.displayTitle("Posts");
        vpView.displayList();
        vpRouter.addLinkStubs();
    },

    /**
     * extract the slug from the URL stored by the browser
     * @returns {string} slug
     */
    getPostSlugFromURL: function () {
        return (location.hash.replace("#", ""));
    },

    makeURLFromPostSlug: function (slug) {
        return (location.pathname + "#" + slug);
    },

    /**
     * return the name of the "current" post
     * @returns {Function}
     */
    getCurPostName: function () {
        return(vpModel.getCurSlug());
    },

    /**
     * Given the slug of a post, create the URL that will navigate to that post
     * @param slug  {string} slug of post whose URL is desired
     */
    getPostLinkFromSlug: function (slug) {

    },

    init: function () {

    },

};