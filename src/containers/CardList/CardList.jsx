import React, { useContext, useState, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import fetchBook from "../../services/fetchBook";
import Card from "../../components/Card/Card";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "./CardList.module.scss";
import LoadMore from "../../components/LoadMore/LoadMore";

const CardList = ({ bookSearch }) => {
    const removeDuplicateBooks = (array) => {
        return array.reduce((acc, curr) => {
            if (!acc.find((book) => book.id === curr.id)) {
                acc.push(curr);
            }
            return acc;
        }, []);
    };

    const createContent = removeDuplicateBooks(bookSearch)?.map((book) => (
        <Card
            key={book.id}
            title={book.volumeInfo?.title ?? ""}
            authors={book.volumeInfo?.authors ?? []}
            image={book.volumeInfo.imageLinks?.thumbnail ?? ""}
            book={book}
        />
    ));

    return <section className={styles.Card_List}>{createContent}</section>;
};

export default CardList;
