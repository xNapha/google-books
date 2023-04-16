import React, { useContext, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider.jsx";
import { useInView } from "react-intersection-observer";
import { loadMoreBooks } from "../../services/fetchBook.js";
import styles from "./LoadMore.module.scss";
import IMAGES from "../../Images/images.jsx";
const LoadMore = () => {
    const { ref, inView } = useInView();
    const { searchTerm, setSearchedBooks, searchedBooks } =
        useContext(SearchQueryContext);

    useEffect(() => {
        loadMoreBooks(searchTerm, searchedBooks, setSearchedBooks);
    }, [inView]);

    return (
        <div className={styles.Load_More} ref={ref}>
            <img src={IMAGES.spinner} alt="Loading..." />
        </div>
    );
};

export default LoadMore;
