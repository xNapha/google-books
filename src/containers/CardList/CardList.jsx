import React from "react";
import Card from "../../components/Card/Card";
import fetchBook from "../../services/fetchBook.js";
import { useState, useEffect } from "react";

const CardList = ({ showBookModal, searchTerm }) => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        fetchBook(searchTerm)
            .then((book) => setBookList(book))
            .catch((error) => console.log(error));
    }, [searchTerm]);

    return (
        <div>
            {bookList
                ? bookList.map((book) => {
                      return <Card key={book.id} info={book} />;
                  })
                : "no"}
        </div>
    );
};

export default CardList;
