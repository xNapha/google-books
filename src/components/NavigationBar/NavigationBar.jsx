import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavigationBar = () => {
    return (
        <>
            <NavLink to="/">Google Books</NavLink>
            <SearchBar />
        </>
    );
};

export default NavigationBar;
