import React from "react";

const CardFront = ({ title, authors, description, imageLinks }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{authors.join(", ")}</h4>
            <p>{description}</p>
            <img src={imageLinks.thumbnail} alt="" />
        </div>
    );
};

export default CardFront;
