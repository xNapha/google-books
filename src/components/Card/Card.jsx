import React from "react";
import CardBack from "../CardBack/CardBack";
import CardFront from "../CardFront/CardFront";
const Card = ({ book, showBookModal }) => {
    const {
        title,
        authors,
        description,
        imageLinks,
        publisher,
        publishedDate,
        categories,
        maturityRating,
    } = book.volumeInfo;
    return (
        <>
            <CardFront
                title={title}
                authors={authors}
                imageLinks={imageLinks}
            />
            <CardBack
                description={description}
                publisher={publisher}
                publishedDate={publishedDate}
                categories={categories}
                maturityRating={maturityRating}
                showBookModal={showBookModal}
                book={book}
            />
        </>
    );
};

export default Card;
