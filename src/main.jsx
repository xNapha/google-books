import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import SearchQueryProvider from "./contexts/SearchQueryProvider";
import BookProvider from "./contexts/BookProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <BookProvider>
            <SearchQueryProvider>
                <App />
            </SearchQueryProvider>
        </BookProvider>
    </BrowserRouter>
);
