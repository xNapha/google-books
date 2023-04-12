import React, { createContext, useState } from "react";

export const SearchQueryContext = createContext();
const SearchQueryProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const value = { searchTerm, setSearchTerm };
    return (
        <SearchQueryContext.Provider value={value}>
            {children}
        </SearchQueryContext.Provider>
    );
};

export default SearchQueryProvider;
