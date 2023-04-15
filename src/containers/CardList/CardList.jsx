import React, { useContext, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";
import LoadMore from "../../components/LoadMore/LoadMore";
import removeDuplicateBooks from "../../services/removeDuplicateBooks";

const CardList = () => {
    const { searchedBooks } = useContext(SearchQueryContext);

    const maximumLimitofBooksToSearchFor = 600;

    const createContent = removeDuplicateBooks(searchedBooks)?.map((book) => {
        if (!book.favourite) {
            book.favourite = false;
        }
        return (
            <Card
                key={book.id}
                title={book.volumeInfo?.title ?? ""}
                authors={book.volumeInfo?.authors ?? []}
                image={book.volumeInfo?.imageLinks?.thumbnail ?? ""}
                description={book.volumeInfo?.description}
                book={book}
            />
        );
    });

    return (
        <>
            <section className={styles.Card_List}>{createContent}</section>
            {searchedBooks.length > maximumLimitofBooksToSearchFor ? (
                ""
            ) : (
                <LoadMore />
            )}
        </>
    );
};

export default CardList;
