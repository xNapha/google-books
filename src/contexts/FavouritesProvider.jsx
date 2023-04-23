import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const FavouritesContext = createContext();
const FavouritesProvider = ({ children }) => {
    if (!localStorage.googleBooks) {
        localStorage.setItem("googleBooks", JSON.stringify([]));
    }
    const localStorageBooks = JSON.parse(localStorage.getItem("googleBooks"));
    const [favouriteBooks, setFavouriteBooks] = useState(localStorageBooks);
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
        localStorage.setItem("googleBooks", JSON.parse(favourites));
    }, [favourites]);

    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesProvider;
