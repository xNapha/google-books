import React from "react";
import CardCategory from "../CardCategory/CardCategory";
import { useState } from "react";

const CardBack = ({
    publisher = "empty",
    publishedDate,
    categories,
    maturityRating,
    showBookModal,
    book,
}) => {
    const handleClick = (e) => {
        e.preventDefault();
        showBookModal(book);
    };

    return (
        <div>
            <p>Publisher: {publisher}</p>
            <p>Published Date: {publishedDate}</p>
            <section>
                <p>Categories: </p>
                <ul>
                    <li>{categories}</li>
                </ul>
            </section>
            <p> Maturity Rating: {maturityRating}</p>
            <button onClick={handleClick}>More Information</button>
        </div>
    );
};

export default CardBack;
