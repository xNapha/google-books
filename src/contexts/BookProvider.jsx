import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [book, setBook] = useState();
    const value = { book, setBook };
    return (
        <BookContext.Provider value={value}>{children}</BookContext.Provider>
    );
};

export default BookProvider;
