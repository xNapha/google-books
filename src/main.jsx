import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.module.scss";
import SearchQueryProvider from "./contexts/SearchQueryProvider";
import BookProvider from "./contexts/BookProvider";
import { BrowserRouter } from "react-router-dom";
import FavouritesProvider from "./contexts/FavouritesProvider";

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
