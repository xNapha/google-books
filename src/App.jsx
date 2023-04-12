import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import SearchPage from "./containers/SearchPage/SearchPage";
import DedicatedBook from "./containers/DedicatedBook/DedicatedBook";
import { BookContext } from "./contexts/BookProvider";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
    const { book } = useContext(BookContext);
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:search" element={<SearchPage />} />
            <Route
                path="/book/:title"
                element={<DedicatedBook book={book} />}
            />
        </Routes>
    );
};

export default App;
