import React, { useContext, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import { useInView } from "react-intersection-observer";
import { loadMoreBooks } from "../../services/fetchBook";
import styles from "./LoadMore.module.scss";

const LoadMore = () => {
    const { ref, inView } = useInView();
    const { searchTerm, bookSearch, setBookSearch } =
        useContext(SearchQueryContext);

    useEffect(() => {
        loadMoreBooks(searchTerm, bookSearch, setBookSearch);
    }, [inView]);

    return (
        <div className={styles.Load_More} ref={ref}>
            <img src="../../src/assets/spinner-solid.svg" alt="Loading..." />
        </div>
    );
};

export default LoadMore;
