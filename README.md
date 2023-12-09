# Weekend Movie Sagas

## Description

We have a list of Movies and we want the user to click on a single poster. Once clicked they want it to send you to another page that has that specific poster, title, description and genres. The page should also have a back button that sends you back to the home page that still has all the movies. The hard part of the problem is that many movies have many genres and connecting them and putting them on the DOM.


## Step By Step

1. Install redux and all package.json

2. Set up the details component and be able to link it to a new page.

3. Make the back button to bring you back to the home page.

4. Put in params to dispatch the movie you just clicked

5. Make a reducer to collect the params you just collected from the movie

6. Call it back to the details page to load it on the DOM.

7. Make a genorator function that get the specific genre of the movie you clicked.

8. Set up the get route in the server side that gets the genres and the movie id.

9. Once gets the genres it sends to store that sends to reducer.

10. Call it back to the details page to put it back on the DOM.

11. Once everything is working corectly, make sure all the tests are passing.

12. Now that everything is done, style it up and make it look nice.
