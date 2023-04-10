import React from "react";
import { renderArray } from "../../services/renderArrays";
import { useState } from "react";

const CardBack = ({
    description,
    publisher,
    publishedDate,
    categories,
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
                <ul>{renderArray(categories)}</ul>
            </section>
            <p>{description}</p>
            <button onClick={handleClick}>More Information</button>
        </div>
    );
};

export default CardBack;

CardBack.defaultProps = {
    publisher: "NO KNOWN PUBLISHER",
    publishedDate: "NO KNOWN PUBLISHED DATE",
    categories: "NO KNOWN CATEGORY",
    description: "NO KNOWN DESCRIPTION",
};
