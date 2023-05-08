import React, { useContext, useEffect } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar.jsx";
import { FavouritesContext } from "../../contexts/FavouritesProvider.jsx";
import Card from "../../components/Card/Card.jsx";
import styles from "./Favourites.module.scss";
import { BookContext } from "../../contexts/BookProvider.jsx";
import DedicatedBook from "../DedicatedBook/DedicatedBook.jsx";
import removeDuplicateBooks from "../../services/removeDuplicateBooks.js";
import IMAGES from "../../Images/images.jsx";

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
                    title={filteredBook.volumeInfo.title ?? ""}
                    authors={filteredBook.volumeInfo.authors ?? []}
                    image={
                        filteredBook?.volumeInfo?.imageLinks?.thumbnail ??
                        IMAGES.noCover
                    }
                    description={filteredBook.volumeInfo.description ?? ""}
                    book={filteredBook}
                />
            );
        }
    );
    useEffect(() => {
        setFilteredFavouriteBooks([...favouriteBooks]);
    }, [favouriteBooks]);

    const checkForFavouriteBooks = (createContent) => {
        console.log(createContent);
        if (favouriteBooks.length > 0 && filteredFavouriteBooks.length === 0) {
            return (
                <p>
                    No books that include {filteredSearchTerm}, were found in
                    your favourites
                </p>
            );
        } else if (favouriteBooks.length === 0) {
            return <p>No favourite books assigned</p>;
        }
        return createContent;
    };

    return (
        <div>
            <NavigationBar favouritesPage={true} />
            <div className={styles.Favourites}>
                {checkForFavouriteBooks(createContent)}
            </div>
            {singleBook && <DedicatedBook favouritesPage={true} />}
        </div>
    );
};

export default Favourites;
