import React, { useContext, useEffect, useState } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider.jsx";
import { initialSearch } from "../../services/fetchBook.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.jsx";
import CardList from "../CardList/CardList.jsx";
import DedicatedBook from "../DedicatedBook/DedicatedBook.jsx";
import { BookContext } from "../../contexts/BookProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./SearchPage.module.scss";
import IMAGES from "../../Images/images.jsx";

const SearchPage = () => {
    const { singleBook } = useContext(BookContext);
    const { searchTerm, setSearchedBooks, loading, setLoading, setSearchTerm } =
        useContext(SearchQueryContext);
    const { search } = useParams();
    const navigate = useNavigate();
    const [noBooks, setNoBooks] = useState(true);

    useEffect(() => {
        setSearchTerm(search);
        navigate(`/google-books/${search.replace(/\s/g, "+")}`);
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
                        src={IMAGES.spinner}
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
