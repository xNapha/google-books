import React, { useContext } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import Card from "../../components/Card/Card";
import styles from "./CardList.module.scss";
import LoadMore from "../../components/LoadMore/LoadMore";
import removeDuplicateBooks from "../../services/removeDuplicateBooks";

const CardList = () => {
    const { bookSearch } = useContext(SearchQueryContext);

    const createContent = removeDuplicateBooks(bookSearch)?.map((book) => {
        book.favourite = false;
        return (
            <Card
                key={book.id}
                title={book.volumeInfo?.title ?? ""}
                authors={book.volumeInfo?.authors ?? []}
                image={book.volumeInfo.imageLinks?.thumbnail ?? ""}
                book={book}
            />
        );
    });

    return (
        <>
            <section className={styles.Card_List}>{createContent}</section>
            {bookSearch > 0 ? "" : <LoadMore />}
        </>
    );
};

export default CardList;
