import React from "react";

const CardFront = ({ title, authors, description, imageLinks }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{authors && authors.join(", ")}</h4>
            <p>{description}</p>
            <img src={imageLinks && imageLinks.thumbnail} alt="" />
        </div>
    );
};

export default CardFront;
