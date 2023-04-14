import React, { useState } from "react";
import { createContext } from "react";
import Favourites from "../containers/Favourites/Favourites";
export const FavouritesContext = createContext();
const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    const value = { favourites, setFavourites };
    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesProvider;
