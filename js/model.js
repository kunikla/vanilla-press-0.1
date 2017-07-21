/**
 * Model file for working with data
 */

/**
 * Main Model Object
 *
 */

let vpModel = {

    allPosts: JSON.parse(localStorage.getItem('vp_database')),
    curPost: {
        date: helpers.timeStamp(),
        modified: helpers.timeStamp(),
        type: "post",
        title: "",
        content: "",
        slug: "",
        id: "0",
    },
    maxID: 0,
    curPostID: 0,
    listIterator: 0,

    /**
     * sorts the posts in allPosts by their ID's
     */
    sortPosts: function () {
        vpModel.allPosts.sort((x,y)=>((x.id < y.id) ? 1 : -1));
    },

    /**
     * Fetch the list of posts from the "database" (localStorage for now)
     * store them in an array
     */
    fetchPosts: function () {

        vpModel.allPosts = JSON.parse(localStorage.getItem('vp_database'));


    },

    /**
     * Store all the posts to the "database" (localStorage for now)
     *
     */
    storePosts: function () {
        localStorage.setItem('vp_database', JSON.stringify(vpModel.allPosts));
    },

    // TODO method to check for existence of "database", empty "database"
    // TODO event handler: if user clicks on button, initialize "database" and hide button

    /**
     * Copy a single post into the current post
     * @param id {string} id of post sought
     * return {boolean} was matching post found?
     */
    getPostByID: function (id) {
        //let post = {};
        for (post of vpModel.allPosts) {
            if (id == post.id) {
                vpModel.curPost = post;
                return true;
            }
        }
        return false;
    },

    /**
     * Copy a single post into the current post
     * @param slug {string} slug of post sought
     * @return {boolean} was matching post found?
     */
    getPostBySlug: function (slug) {
        let post = {};
        for (post of vpModel.allPosts) {
            if (slug == post.slug) {
                vpModel.curPost = post;
                return true;
            }
        }
        return false;
    },

    /**
     *
     * @returns {string} the title of the current post
     */
    getCurTitle: function () {
        return vpModel.curPost.title;
    },

    /**
     *
     * @returns {string} the content of the current post
     */
    getCurContent: function () {
        return vpModel.curPost.content;
    },

        /**
         *
         * @returns {string} the slug of the current post
         */
    getCurSlug: function () {
        return vpModel.curPost.slug;
    },

    /**
     *
     * @returns {string} the id of the current post
     */
    getCurID: function () {
        return vpModel.curPost.id;
    },

    /**
     *
     * @returns {string} the date the current post was created
     */
    getCurDate: function () {
        return vpModel.curPost.date;
    },

    /**
     *
     * @returns {string} the date the current post was last modified
     */
    getCurModified: function () {
        return vpModel.curPost.modified;
    },

    /**
     * Store new title in current post
     * @param newTitle {string} value to be stored as title of current post
     */
    updatePostTitle: function (newTitle) {
        vpModel.curPost.title = newTitle;
    },

    /**
     * Store new content in current post
     * @param newContent {string} value to be stored as content of current post
     */
    updatePostContent: function (newContent) {
        vpModel.curPost.content = newContent;
    },

    /**
     * Store new slug in current post
     * @param newSlug {string} value to be stored as slug of current post
     */
    updatePostSlug: function (newSlug) {
        vpModel.curPost.slug = newSlug;
    },

    /**
     * Update the current post in temporary storage
     * @param newTitle {string} value to be stored as the current post's title
     * @param newContent {string} value to be stored as the current post's content
     * @param newSlug {string} value to be stored as the current post's slug
     */
    updateCurPost: function (newTitle, newContent, newSlug) {

        vpModel.curPost.title = newTitle;
        vpModel.curPost.content = newContent;
        vpModel.curPost.slug = newSlug;
    },

    /**
     * Update the local copy of the database with curPost. If no match on id, create a new post.
     * Write the local copy of the database to localStorage
     * @return returns false if the slug in curPost is already being used by another post
     *
     * NOTE:
     * We must check the slug for duplicates because they can be based on user input
     * We will assume no duplicate ids because they are always generated by the app
     */
    saveCurPost: function () {
        let curTimeStamp = helpers.timeStamp(),
            foundAlready = false,
            postIndex = null;

        for (let i = 0, max = vpModel.allPosts.length; i < max; i++) {
            // check for duplicate slugs
            if (vpModel.allPosts[i].slug == vpModel.curPost.slug)
                if (foundAlready) {
                    return false;
                } else {
                    foundAlready = true;
                }
            // check for matching id
            if (vpModel.allPosts[i].id == vpModel.curPost.id) {
                postIndex = i;
            }
        }

        // create a new id and a new post if we didn't find a match
        if (null == postIndex) {
            vpModel.curPost.id = vpModel.maxID++;
            vpModel.curPost.date = curTimeStamp;
            postIndex = vpModel.allPosts.push(vpModel.curPost) - 1; // length - 1
        }

        vpModel.curPost.modified = curTimeStamp;
        vpModel.allPosts[postIndex] = vpModel.curPost;
        vpModel.storePosts();
        return true;

    },

    /**
     * Set the index to the first element in allPosts
     */
    resetIterator: function () {
        vpModel.listIterator = 0;
    },

    /**
     * Get the post at allPosts[listIterator] and increment listIterator
     * @return {boolean} return false if we're at the end of the list
     */
    getNextPost: function () {
        if (vpModel.listIterator < vpModel.allPosts.length) {
            vpModel.curPost = vpModel.allPosts[vpModel.listIterator++];
            return true;
        } else {
            return false;
        }
    },

    // /**
    //  * Clear fields in current post
    //  */
    // initCurPost: function () {
    //     vpModel.curPost.date = "";
    //     vpModel.curPost.modified = "";
    //     vpModel.curPost.id = "0";
    //     vpModel.curPost.slug = "";
    //     vpModel.curPost.type = "post";
    //     vpModel.curPost.title = "";
    //     vpModel.curPost.content = "";
    //
    // },

    /**
     * Initialize the Model object
     */
    init: function() {

        vpModel.fetchPosts();
        vpModel.sortPosts();
        vpModel.maxID = vpModel.allPosts[vpModel.allPosts.length-1].id;
        vpModel.curPostID = vpModel.allPosts[0].id;
        // vpModel.initCurPost();
    },

    /**
     * Get ready to end the app
     * @param saveFlag {boolean] should the current post be saved?
     */
    quiesce: function(saveFlag) {
        if (saveFlag) {
            vpModel.saveCurPost(); // ignore errors for now
        } else {
            vpModel.storePosts();
        }
    }
};