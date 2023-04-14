import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { FavouritesContext } from "../../contexts/FavouritesProvider";
import Card from "../../components/Card/Card";
import styles from "../CardList/CardList.module.scss";
import { BookContext } from "../../contexts/BookProvider";
import DedicatedBook from "../DedicatedBook/DedicatedBook";

const Favourites = () => {
    const { favourites } = useContext(FavouritesContext);
    const { book } = useContext(BookContext);

    const createContent = favourites?.map((book) => {
        book.favourite = true;
        return (
            <Card
                key={book.id}
                title={book.volumeInfo?.title ?? ""}
                authors={book.volumeInfo?.authors ?? []}
                image={book.volumeInfo.imageLinks?.thumbnail ?? ""}
                book={book}
            />
        );
    });
    return (
        <div>
            <NavigationBar />
            <div className={styles.Card_List}>
                {favourites.length > 0 ? (
                    createContent
                ) : (
                    <p>No favourite books</p>
                )}
            </div>
            {book && <DedicatedBook book={book} />}
        </div>
    );
};

export default Favourites;
