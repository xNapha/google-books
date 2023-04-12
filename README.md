# Google Books

The aim is for the user to be able to search for a book inside the Google Books database and to be able to get more details about a certain title.

## Langauges used

HTML, CSS/SCSS, JavaScript, and React

## Features that must be included

-   Header section introducing the page
-   Form containing a text input and a submit / search button

-   A grid of books
    Instructions:
-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules.
-   Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Future Features that would be nice to have

-   Header bar for quick searching by genre
-   Filter section to filter search by specific parameters
-   Favourites section to store books, (will only be per session since i dont have any back end knowledge yet)
-

## Plan

<!--
Input: user enters a term into a search bar
Output: either show books related to the title, or an error saying no books have been found.

Steps:
    1. user enters a string into a search bar
    2. term should be used to check a database for related titles
    3. all related titles should render on the website
    4. each title should
        a. include basic information and a picture for identification
        b. have the functionality to flip over to show more a bit more detaile information
        c. click again on a certain point and show all the details of the book as a modal

Components needed:
    1. Card
        - basic details and image
    2. CardModal
        - all the specific details fo the book
    3. SearchBar
        - used by the user to find specific books


Containers needed:
    1. CardList
        - renders the all the cards from the search term

 -->
