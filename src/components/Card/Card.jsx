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
        <div>
            <CardFront
                title={title}
                authors={authors}
                description={description}
                imageLinks={imageLinks}
            />
            <CardBack
                publisher={publisher}
                publishedDate={publishedDate}
                categories={categories}
                maturityRating={maturityRating}
                showBookModal={showBookModal}
                book={book}
            />
        </div>
    );
};

export default Card;
