import React from "react";
import Card from "../../components/Card/Card";
import fetchBook from "../../services/fetchBook.js";
import { useState, useEffect } from "react";

const CardList = ({ showBookModal, searchTerm, getNumOfItems }) => {
    const [bookList, setBookList] = useState([]);

    const getInformation = (data) => {
        getNumOfItems(data.totalItems);
        return data.items;
    };

    useEffect(() => {
        fetchBook(searchTerm, 40)
            .then(getInformation)
            .then(setBookList)
            .catch((error) => console.log(error));
    }, [searchTerm]);

    const renderBookList = (bookList) => {
        if (!bookList)
            return `I couldn't find any books with the search term ${searchTerm}, please try again`;
        return bookList.map((book) => {
            return (
                <Card key={book.id} book={book} showBookModal={showBookModal} />
            );
        });
    };

    return <>{renderBookList(bookList)}</>;
};

export default CardList;
