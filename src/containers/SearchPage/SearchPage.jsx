import React, { useContext, useState, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import fetchBook from "../../services/fetchBook";
import Card from "../../components/Card/Card";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import LoadMore from "../../components/LoadMore/LoadMore";
import CardList from "../CardList/CardList";
const SearchPage = () => {
    const { searchTerm } = useContext(SearchQueryContext);
    const [totalBooks, setTotalBooks] = useState(0);
    const [bookSearch, setBookSearch] = useState([]);
    useEffect(() => {
        fetchBook(searchTerm, setBookSearch, setTotalBooks);
    }, [searchTerm]);
    return (
        <>
            <header>
                <NavigationBar />
            </header>
            <main>
                <p>Total book count of {totalBooks ?? 0}</p>
                <CardList bookSearch={bookSearch} />
            </main>
            <footer>
                <LoadMore></LoadMore>
                <LoadMore></LoadMore>
            </footer>
        </>
    );
};

export default SearchPage;
