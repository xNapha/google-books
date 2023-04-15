import React, { createContext, useState } from "react";

export const SearchQueryContext = createContext();
const SearchQueryProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const value = {
        searchTerm,
        setSearchTerm,
        searchedBooks,
        setSearchedBooks,
        loading,
        setLoading,
    };
    return (
        <SearchQueryContext.Provider value={value}>
            {children}
        </SearchQueryContext.Provider>
    );
};

export default SearchQueryProvider;
