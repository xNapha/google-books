import React, { useState } from "react";
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
    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesProvider;
