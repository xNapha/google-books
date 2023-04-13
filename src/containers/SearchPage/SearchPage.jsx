import React, { useContext, useEffect } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import { initialSearch } from "../../services/fetchBook";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import CardList from "../CardList/CardList";
import DedicatedBook from "../DedicatedBook/DedicatedBook";
import { BookContext } from "../../contexts/BookProvider";
import { useParams, useNavigate } from "react-router-dom";

const SearchPage = () => {
    const { book } = useContext(BookContext);
    const {
        searchTerm,
        bookSearch,
        setBookSearch,
        loading,
        setLoading,
        setSearchTerm,
    } = useContext(SearchQueryContext);
    const { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/${search.replace(/\s/g, "+")}`);
        setLoading(true);
        initialSearch(search, bookSearch, setBookSearch, setLoading);
    }, [searchTerm, search]);

    const mainContent = (
        <main>
            <CardList />
            {book && <DedicatedBook book={book} />}
        </main>
    );
    return (
        <>
            <header>
                <NavigationBar />
            </header>
            {loading ? <p>Loading...</p> : mainContent}
        </>
    );
};

export default SearchPage;
