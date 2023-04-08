import React from "react";
import CardBack from "../CardBack/CardBack";
import CardFront from "../CardFront/CardFront";
const Card = ({ info }) => {
    const { title, authors, description, imageLinks } = info.volumeInfo;
    return (
        <div>
            <CardFront
                title={title}
                authors={authors}
                description={description}
                imageLinks={imageLinks}
            />
        </div>
    );
};

export default Card;
