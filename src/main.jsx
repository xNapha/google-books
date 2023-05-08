import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.module.scss";
import SearchQueryProvider from "./contexts/SearchQueryProvider.jsx";
import BookProvider from "./contexts/BookProvider.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import FavouritesProvider from "./contexts/FavouritesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <BookProvider>
            <SearchQueryProvider>
                <FavouritesProvider>
                    <App />
                </FavouritesProvider>
            </SearchQueryProvider>
        </BookProvider>
    </HashRouter>
);
