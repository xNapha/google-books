import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [singleBook, setSingleBook] = useState();
    const value = { singleBook, setSingleBook };
    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
};

export default BookProvider;
