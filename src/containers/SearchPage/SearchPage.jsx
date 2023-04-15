import React, { useContext, useEffect, useState } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import { initialSearch } from "../../services/fetchBook";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import CardList from "../CardList/CardList";
import DedicatedBook from "../DedicatedBook/DedicatedBook";
import { BookContext } from "../../contexts/BookProvider";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./SearchPage.module.scss";

const SearchPage = () => {
    const { singleBook } = useContext(BookContext);
    const { searchTerm, setSearchedBooks, loading, setLoading, setSearchTerm } =
        useContext(SearchQueryContext);
    const { search } = useParams();
    const navigate = useNavigate();
    const [noBooks, setNoBooks] = useState(true);

    useEffect(() => {
        setSearchTerm(search);
        navigate(`/${search.replace(/\s/g, "+")}`);
        setNoBooks(false);
        setLoading(true);
        initialSearch(search, setSearchedBooks, setLoading, setNoBooks);
    }, [searchTerm]);

    const bookContent = (
        <>
            <CardList />
            {singleBook && <DedicatedBook favouritesPage={false} />}
        </>
    );

    const checkForValidBooks = () => {
        let content = bookContent;
        if (loading && !noBooks) {
            content = (
                <div>
                    <img
                        src="../../src/assets/spinner-solid.svg"
                        alt="Loading..."
                        className={styles["Search_Page-loading"]}
                    />
                </div>
            );
        } else if (!loading && noBooks) {
            content = <p>No books containing {searchTerm} were found</p>;
        }
        return content;
    };

    return (
        <>
            <header>
                <NavigationBar favouritesPageButton={true} />
            </header>
            <main className={styles["Search_Page"]}>
                {checkForValidBooks()}
            </main>
        </>
    );
};

export default SearchPage;
