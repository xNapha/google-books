import React, { useContext, useState } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.scss";
import { applyStyles } from "../../services/applyStyles.js";
import { FavouritesContext } from "../../contexts/FavouritesProvider.jsx";
const SearchBar = ({
    navigateToFavourites,
    submitSearch,
    stylesButtons,
    favouritesPage,
}) => {
    const { setSearchTerm, setSearchedBooks } = useContext(SearchQueryContext);
    const { favouriteBooks, setFilteredFavouriteBooks, setFilteredSearchTerm } =
        useContext(FavouritesContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!favouritesPage) {
            setSearchedBooks([]);
            setSearchTerm(search);
            navigate(`/${search.replace(/[\s]/g, "+")}`);
        }
    };
    const handleChange = (e) => {
        if (!favouritesPage) {
            setSearch(e.target.value);
        } else {
            setFilteredSearchTerm(e.target.value);
            const filtered = favouriteBooks.filter((book) =>
                book.volumeInfo.title.toLowerCase().includes(e.target.value)
            );
            setFilteredFavouriteBooks(filtered);
        }
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className={styles.Search_Bar}>
                <img
                    src="../../src/assets/magnifying-glass.svg"
                    alt="search bar"
                />
                <input type="text" />
                <button>
                    <img src="../../src/assets/send-solid.svg" alt="send" />
                </button>
            </div>
            <div className={applyStyles(stylesButtons)}>
                {submitSearch}
                {navigateToFavourites}
            </div>
        </form>
    );
};

export default SearchBar;
