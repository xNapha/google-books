import React, { useContext, useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { BookContext } from "../../contexts/BookProvider.jsx";
import IMAGES from "../../Images/images";

const Card = ({ title, authors, image, book, description }) => {
    const { setSingleBook } = useContext(BookContext);
    const [cardVisibility, setCardVisibility] = useState(false);
    const [showInfo, setShowInfo] = useState(styles["Card-information"]);

    const shortenTitle =
        title.length > 10 ? `${title.substring(0, 10)}...` : title;

    const authorString = authors.join(", ");

    const shortenAuthors =
        authorString.length > 20
            ? `${authorString.substring(0, 20)}...`
            : authorString;

    const handleClick = () => {
        setSingleBook(book);
    };
    const handleMouseEnter = () => {
        setCardVisibility(true);
    };
    const handleMouseLeave = () => {
        setCardVisibility(false);
    };

    useEffect(() => {
        cardVisibility
            ? setShowInfo(styles["Card-information"])
            : setShowInfo(styles.Hidden);
    }, [cardVisibility]);

    return (
        <div
            className={styles.Card}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={image || IMAGES.noCover}
                alt={title}
                className={styles["Card-image"]}
            />
            <div className={showInfo}>
                <h1 className={styles["Card-information-title"]}>
                    {shortenTitle}
                </h1>
                <p className={styles["Card-information-author"]}>
                    {shortenAuthors}
                </p>
                <p className={styles["Card-information-description"]}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;