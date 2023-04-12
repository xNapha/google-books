import React, { useContext, useEffect } from "react";
import List from "../List/List";
import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../contexts/BookProvider";

const Card = ({ title, authors, image, book }) => {
    const { setBook } = useContext(BookContext);
    const listAuthors = authors.map((author, index) => (
        <List key={index}>{author}</List>
    ));
    useEffect(() => {
        setBook(book);
    }, []);
    return (
        <NavLink to={`/book/${title.split(" ").join("+")}`}>
            <div className={styles.Card}>
                <img src={image} alt={title} className={styles["Card-image"]} />
                <div className={styles["Card-description"]}>
                    <h3 className={styles["Card-description-title"]}>
                        {title}
                    </h3>
                    <h4 className={styles["Card-description-authors"]}>
                        Authors:
                    </h4>
                    <ul className={styles["Card-description-list"]}>
                        {listAuthors}
                    </ul>
                </div>
            </div>
        </NavLink>
    );
};

export default Card;

Card.defaultProps = {
    image: "No",
};
