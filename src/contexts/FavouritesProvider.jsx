import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const FavouritesContext = createContext();
const FavouritesProvider = ({ children }) => {
    const [favouriteBooks, setFavouriteBooks] = useState([]);
    const [filteredFavouriteBooks, setFilteredFavouriteBooks] = useState([]);
    const [filteredSearchTerm, setFilteredSearchTerm] = useState("");
    const value = {
        favouriteBooks,
        setFavouriteBooks,
        filteredFavouriteBooks,
        setFilteredFavouriteBooks,
        filteredSearchTerm,
        setFilteredSearchTerm,
    };

    useEffect(() => {
        if (!localStorage.googleBooks) {
            localStorage.setItem("googleBooks", JSON.stringify([]));
        }
        const localStorageBooks = JSON.parse(
            localStorage.getItem("googleBooks")
        );
        setFavouriteBooks(localStorageBooks);
    }, []);
    useEffect(() => {
        localStorage.setItem("googleBooks", JSON.stringify(favouriteBooks));
    }, [favouriteBooks]);

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesProvider;
