import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.module.scss";
import SearchQueryProvider from "./contexts/SearchQueryProvider.jsx";
import BookProvider from "./contexts/BookProvider";
import { BrowserRouter } from "react-router-dom";
import FavouritesProvider from "./contexts/FavouritesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <BookProvider>
            <SearchQueryProvider>
                <FavouritesProvider>
                    <App />
                </FavouritesProvider>
            </SearchQueryProvider>
        </BookProvider>
    </BrowserRouter>
);
