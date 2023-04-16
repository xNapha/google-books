import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavigationBar.module.scss";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import {
    toggleNavBar,
    toggleButton,
} from "../../services/variables/NavigationBar";

const NavigationBar = ({ favouritesPageButton, favouritesPage }) => {
    const { searchTerm } = useContext(SearchQueryContext);
    const [prevScrollLocation, setPrevScrollLocation] = useState(
        window.pageYOffset
    );
    const [style, setStyle] = useState(`${styles.Navigation_Bar}`);
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

    window.addEventListener("scroll", () => {
        toggleNavBar(
            prevScrollLocation,
            setPrevScrollLocation,
            style,
            styles,
            setStyle
        );
    });

    return (
        <div className={style}>
            <NavLink to="/">
                <img
                    src="../../src/assets/google-books.svg"
                    alt=""
                    className={styles["Navigation_Bar-logo"]}
                />
            </NavLink>
            <SearchBar favouritesPage={favouritesPage} />
            {toggleButton(favouritesPageButton, toFavourites, toSearchPage)}
        </div>
    );
};

export default NavigationBar;
