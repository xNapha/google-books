import React, { useContext } from "react";
import List from "../../components/List/List";
import styles from "./DedicatedBook.module.scss";
import { BookContext } from "../../contexts/BookProvider";
import { FavouritesContext } from "../../contexts/FavouritesProvider";
import { useState } from "react";
import {
    addToFavourites,
    checkFavourites,
    deleteFromFavourites,
} from "../../services/favourites";

const DedicatedBook = () => {
    const { book, setBook } = useContext(BookContext);
    const { favourites, setFavourites } = useContext(FavouritesContext);
    const { volumeInfo } = book;

    const handleClick = (e) => {
        e.preventDefault();
        checkFavourites(favourites, setFavourites, book);
    };
    return (
        <div className={styles.Dedicated_Book}>
            <div className={styles.Dedicated_Book_info}>
                <img
                    src={
                        volumeInfo?.imageLinks?.thumbnail ??
                        BOOKDEFAULTS.imagePath
                    }
                    alt={volumeInfo?.title ?? BOOKDEFAULTS.imageAlt}
                    className={styles["book-image"]}
                />
                <section className={styles["book-text"]}>
                    <header className={styles["book-text_header"]}>
                        <h1>{volumeInfo?.title ?? BOOKDEFAULTS.title}</h1>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setBook("");
                            }}
                        >
                            <img src="" alt="exit" />
                        </button>
                    </header>
                    <main className={styles["book-text_main"]}>
                        <div className={styles["book-text_main-author"]}>
                            <h3>Authors:</h3>
                            <ul>
                                {volumeInfo?.authors?.map((author, index) => (
                                    <List key={index}>{author}</List>
                                )) ?? BOOKDEFAULTS.authors}
                            </ul>
                        </div>
                        <div className={styles["book-text_main-category"]}>
                            <h3>Category:</h3>
                            <ul>
                                {<List>{volumeInfo?.categories}</List> ??
                                    BOOKDEFAULTS.categories}
                            </ul>
                        </div>
                        <div className={styles["book-text_main-description"]}>
                            <h4>Description:</h4>
                            <p>
                                {volumeInfo?.description ??
                                    BOOKDEFAULTS.description}
                            </p>
                        </div>
                        <div className={styles["book-text_main-publishedDate"]}>
                            <h5>Published Date:</h5>
                            <p>
                                {volumeInfo?.publishedDate ??
                                    BOOKDEFAULTS.publishedDate}
                            </p>
                        </div>
                        <div className={styles["book-text_main-publisher"]}>
                            <h5>Publisher:</h5>
                            <p>
                                {volumeInfo?.publisher ??
                                    BOOKDEFAULTS.publisher}
                            </p>
                        </div>
                    </main>
                    <footer className={styles["book-text_footer"]}>
                        <button onClick={handleClick}>
                            {book.favourite ? "Unfavourite" : "Favourite"}
                        </button>
                    </footer>
                </section>
            </div>
        </div>
    );
};

export default DedicatedBook;

const BOOKDEFAULTS = {
    title: "No title could be found for this book",
    authors: "No authors could be found for this book",
    categories: "No categories could be found for this book",
    imageAlt: "No image description could be found for this book",
    imagePath: "../src/assets/default_book.jpg",
    description: "No descript could be found for this book",
    publishedDate: "No published date could be found for this book",
    publisher: "No publisher could be found for this book",
};
