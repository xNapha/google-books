import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavigationBar.module.scss";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";

const NavigationBar = ({ favouritesPageButton, favouritesPage }) => {
    const { searchTerm } = useContext(SearchQueryContext);
    const toFavourites = (
        <NavLink to="/favourites/">
            <button className={styles["Navigation_Bar-favourites"]}>
                Favourites
            </button>
        </NavLink>
    );

    const toSearchPage = (
        <NavLink to={`/${searchTerm.replace(/\s/g, "+")}`}>
            <button className={styles["Navigation_Bar-favourites"]}>
                Leave
            </button>
        </NavLink>
    );

    const toggleButton = () => {
        if (favouritesPageButton) {
            return toFavourites;
        } else {
            return toSearchPage;
        }
    };

    return (
        <div className={styles.Navigation_Bar}>
            <NavLink to="/">
                <img
                    src="../../src/assets/google-books.svg"
                    alt=""
                    className={styles["Navigation_Bar-logo"]}
                />
            </NavLink>
            <SearchBar favouritesPage={favouritesPage} />
            {toggleButton()}
        </div>
    );
};

export default NavigationBar;
