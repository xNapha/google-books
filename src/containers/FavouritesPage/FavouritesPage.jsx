import React, { useContext, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { FavouritesContext } from "../../contexts/FavouritesProvider";
import Card from "../../components/Card/Card";
import styles from "./Favourites.module.scss";
import { BookContext } from "../../contexts/BookProvider";
import DedicatedBook from "../DedicatedBook/DedicatedBook";
import removeDuplicateBooks from "../../services/removeDuplicateBooks";

const Favourites = () => {
    const {
        favouriteBooks,
        filteredFavouriteBooks,
        setFilteredFavouriteBooks,
        filteredSearchTerm,
    } = useContext(FavouritesContext);
    const { singleBook } = useContext(BookContext);

    const createContent = removeDuplicateBooks(filteredFavouriteBooks)?.map(
        (filteredBook) => {
            return (
                <Card
                    key={filteredBook.id}
                    title={filteredBook.volumeInfo.title}
                    authors={filteredBook.volumeInfo.authors}
                    image={filteredBook.volumeInfo.imageLinks.thumbnail}
                    description={filteredBook.volumeInfo.description}
                    book={filteredBook}
                />
            );
        }
    );
    useEffect(() => {
        setFilteredFavouriteBooks([...favouriteBooks]);
    }, [favouriteBooks]);

    const checkForFavouriteBooks = () => {
        let content = createContent;
        if (favouriteBooks.length > 0 && filteredFavouriteBooks.length === 0) {
            content = (
                <p>
                    No books that include {filteredSearchTerm}, were found in
                    your favourites
                </p>
            );
        } else if (favouriteBooks.length === 0) {
            content = <p>No favourite books assigned</p>;
        }
        return content;
    };

    return (
        <div>
            <NavigationBar favouritesPage={true} />
            <div className={styles.Favourites}>{checkForFavouriteBooks()}</div>
            {singleBook && <DedicatedBook favouritesPage={true} />}
        </div>
    );
};

export default Favourites;
