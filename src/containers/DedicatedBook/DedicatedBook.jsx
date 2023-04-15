import React, { useContext, useEffect } from "react";
import List from "../../components/List/List";
import styles from "./DedicatedBook.module.scss";
import { BookContext } from "../../contexts/BookProvider";
import { FavouritesContext } from "../../contexts/FavouritesProvider";
import { checkFavourites } from "../../services/favourites";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";

const DedicatedBook = () => {
    const { singleBook, setSingleBook } = useContext(BookContext);
    const { bookSearch, setBookSearch } = useContext(SearchQueryContext);
    const { favouriteBooks, setFavouriteBooks } = useContext(FavouritesContext);
    const { volumeInfo } = singleBook;
    const handleClick = () => {
        checkFavourites(favouriteBooks, setFavouriteBooks, singleBook);
        setBookSearch([...bookSearch]);
    };

    const applyStyle = (style) => {
        return styles[`book-text${style}`];
    };

    const checkIfInFavouriteBooksAlready = favouriteBooks.map((curr) => {
        if (curr.id == singleBook.id) {
            singleBook.favourite = curr.favourite;
        }
    });

    const checkTitleLength = () => {
        const titleLength = volumeInfo?.title.length;
        let appliedStyle = `${styles["book-text_header-title"]} `;
        if (titleLength > 30) {
            appliedStyle += `${styles["book-text_header-title-longest"]}`;
        } else if (titleLength > 20) {
            appliedStyle += `${styles["book-text_header-title-longer"]}`;
        } else if (titleLength > 14) {
            appliedStyle += `${styles["book-text_header-title-long"]}`;
        } else {
            appliedStyle += `${styles["book-text_header-title-normal"]}`;
        }
        return appliedStyle;
    };

    useEffect(() => {
        checkIfInFavouriteBooksAlready;
    }, []);

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
                <section className={applyStyle("")}>
                    <header className={applyStyle("_header")}>
                        <h1 className={checkTitleLength()}>
                            {volumeInfo?.title ?? BOOKDEFAULTS.title}
                        </h1>
                        <img
                            src={
                                !singleBook.favourite
                                    ? "../../src/assets/star-hollow.svg"
                                    : "../../src/assets/star-filled.svg"
                            }
                            alt=""
                            className={applyStyle("_header-favourite")}
                            onClick={handleClick}
                        />
                        <img
                            src="../../src/assets/x-mark.svg"
                            alt="exit"
                            onClick={(e) => {
                                e.preventDefault();
                                setSingleBook("");
                            }}
                            className={applyStyle("_header-exit")}
                        />
                    </header>
                    <main className={applyStyle("_main")}>
                        <div className={applyStyle("_main-author")}>
                            <h3>Authors:</h3>
                            <ul>
                                {volumeInfo?.authors?.map((author, index) => (
                                    <List key={index}>{author}</List>
                                )) ?? BOOKDEFAULTS.authors}
                            </ul>
                        </div>
                        <div className={applyStyle("_main_author-category")}>
                            <h3>Category:</h3>
                            <ul>
                                {<p>{volumeInfo?.categories}</p> ??
                                    BOOKDEFAULTS.categories}
                            </ul>
                        </div>
                        <div className={applyStyle("_main_author-description")}>
                            <h4>Description:</h4>
                            <p>
                                {volumeInfo?.description ??
                                    BOOKDEFAULTS.description}
                            </p>
                        </div>
                        <div
                            className={applyStyle("_main_author-publishedDate")}
                        >
                            <h5>Published Date:</h5>
                            <p>
                                {volumeInfo?.publishedDate ??
                                    BOOKDEFAULTS.publishedDate}
                            </p>
                        </div>
                        <div className={applyStyle("_main_author-publisher")}>
                            <h5>Publisher:</h5>
                            <p>
                                {volumeInfo?.publisher ??
                                    BOOKDEFAULTS.publisher}
                            </p>
                        </div>
                        <div>
                            <h5>Langauge:</h5>
                            <p>
                                {volumeInfo?.language.toUpperCase() ??
                                    BOOKDEFAULTS.maturityRating}
                            </p>
                        </div>
                    </main>
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
    description: "No description could be found for this book",
    publishedDate: "No published date could be found for this book",
    publisher: "No publisher could be found for this book",
    maturityRating: "No maturity rating could be found for this book",
};
