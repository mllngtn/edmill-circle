# edmill-circle

My attempt at Circle's front-end developer challenge!

## General approach & technologies used

I created a static, single-page site using 11ty to house my project. I find 11ty to be a really intuitive tool, and it's what i used for my personal site (https://edmill.dev).

The site assets (js and styles) are built via commands in the gulpfile, which also runs eslint and stylelint to ensure code consistency.

The site styles are written in .scss, before being compiled to a template file which is inlined as critical css. There are only 6kb of compiled styles, so there was no need for any of them to be deferred.

I built the module as a Vue app using the Composition API. I only saw the need for two components: BookList and BookSingle. The app could be extended in the future by adding additional components for filters, pagination, recommended items etc.

I added routes via a standard configuration of vue-router.

I saved the list of books as a Pinia store. This was not strictly necessary for this project, since the list is only used in one component. However, I was trying to keep my code extendable, and I believe that keeping track of this data via a Pinia store would be best practice for a production app.

I created a simple, custom cache which saves API call results to local storage. In production, I would want to clean this cache out every X days.

## Other thoughts

I am unsure whether you expected a dummy payment portal at this stage. I've opted for simplicity, and just added an alert box which prints the returned message from the purchase API. I'd be happy to extend my solution if required!

'BookSingle.vue' is close to the maximum amount of code I'd want in a single component file. Any more than 100 lines or so, and I would consider moving functionality into composable files for cleanliness, readability and potential future extension.

I created an 'isPurchasing' boolean in 'BookSingle.vue', which removes the 'Buy now' button while a purchase call is being made. This currently gets reset too early - after the visitor has clicked 'OK' on the alert box, but before we have the latest book data (which is used to determine whether the book is now out of stock). Ideally the book purchase API call would return a status code, which I could use to persist the 'isPurchasing' boolean while we waited for that data to return.
