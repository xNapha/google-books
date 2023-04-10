import React from "react";
import CardCategory from "../CardCategory/CardCategory";
import { renderArray } from "../../services/renderArrays";

const CardFront = ({ title, authors, imageLinks }) => {
    return (
        <div>
            <h2>{title}</h2>
            <section>
                <h4>{authors.length > 1 ? "Authors:" : "Author:"}</h4>
                <ul>{renderArray(authors)}</ul>
            </section>
            <img src={imageLinks.thumbnail} alt="" />
        </div>
    );
};

export default CardFront;

CardFront.defaultProps = {
    title: "NO KNOWN TITLE",
    authors: "NO KNOWN AUTHOR",

    imageLinks: "NO KNOWN IMAGE LINK",
};
