import React, { useContext, useEffect } from "react";
import List from "../List/List";
import styles from "./Card.module.scss";
import { BookContext } from "../../contexts/BookProvider";

const Card = ({ title, authors, image, book }) => {
    const { setBook } = useContext(BookContext);
    const listAuthors = authors.map((author, index) => (
        <List key={index}>{author}</List>
    ));

    const longTitle =
        title.length > 35 ? `${title.substring(0, 35)}...` : title;
    return (
        <div
            className={styles.Card}
            onClick={() => {
                setBook(book);
            }}
        >
            <img
                src={image || DEFAULTS.image}
                alt={title}
                className={styles["Card-image"]}
            />
            <div className={styles["Card-description"]}>
                <h3 className={styles["Card-description-title"]}>
                    {longTitle}
                </h3>
                <h4 className={styles["Card-description-authors"]}>Authors:</h4>
                <ul className={styles["Card-description-list"]}>
                    {listAuthors}
                </ul>
            </div>
        </div>
    );
};

export default Card;

const DEFAULTS = {
    image: "../src/assets/default_book.jpg",
};
