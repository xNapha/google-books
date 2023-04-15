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
        favourites,
        filteredFavourites,
        setFilteredFavourites,
        filteredSearchTerm,
    } = useContext(FavouritesContext);
    const { book } = useContext(BookContext);

    const createContent = removeDuplicateBooks(filteredFavourites)?.map(
        (filteredBook) => {
            return (
                <Card
                    key={filteredBook.id}
                    title={filteredBook.volumeInfo?.title ?? ""}
                    authors={filteredBook.volumeInfo?.authors ?? []}
                    image={filteredBook.volumeInfo.imageLinks?.thumbnail ?? ""}
                    book={filteredBook}
                />
            );
        }
    );
    useEffect(() => {
        setFilteredFavourites([...favourites]);
    }, [favourites]);

    const checkForFavouriteBooks = () => {
        let content = createContent;
        if (favourites.length > 0 && filteredFavourites.length === 0) {
            content = (
                <p>
                    No books that include {filteredSearchTerm}, were found in
                    your favourites
                </p>
            );
        } else if (favourites.length === 0) {
            content = <p>No favourite books assigned</p>;
        }
        return content;
    };

    return (
        <div>
            <NavigationBar favouritesPage={true} />
            <div className={styles.Favourites}>{checkForFavouriteBooks()}</div>
            {book && <DedicatedBook favouritesPage={true} />}
        </div>
    );
};

export default Favourites;
