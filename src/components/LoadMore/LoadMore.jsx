import React, { useContext, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import { useInView } from "react-intersection-observer";
import { loadMoreBooks } from "../../services/fetchBook";

const LoadMore = () => {
    const { ref, inView, entry } = useInView();
    const { searchTerm, bookSearch, setBookSearch } =
        useContext(SearchQueryContext);

    useEffect(() => {
        loadMoreBooks(searchTerm, bookSearch, setBookSearch);
    }, [inView]);

    return <div ref={ref}>Loading More Books...</div>;
};

export default LoadMore;
