/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in the application.
     */
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeTruthy();
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feed\'s URL is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feed\'s name is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {
        /* This test ensures that the menu element is
         * hidden by default. 
         */
        it('the menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /* This test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('the menu chnages visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container. 
         * As loadFeed() is asynchronous, the Jasmine's beforeEach 
         * and asynchronous done() functions are used.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('when loadFeed function is called and completed, there is at least a single .entry element within the .feed container', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });


    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let feed0;
        let feed1;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feed0 = $('.feed').html();
                loadFeed(1, function() {
                    feed1 = $('.feed').html();
                    done();
                });
            });
        });

        it('when a new feed is loaded by the loadFeed function, the content of each new feed changes', function(done) {
            expect(feed0).not.toEqual(feed1);
            done();
        });
    });

}());
