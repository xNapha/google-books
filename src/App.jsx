import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage.jsx";
import SearchPage from "./containers/SearchPage/SearchPage.jsx";
import NotFound from "./containers/NotFound/NotFound.jsx";
import FavouritesPage from "./containers/FavouritesPage/FavouritesPage.jsx";
const App = () => {
    return (
        <Routes>
            <Route path="/google-books/" element={<HomePage />} />
            <Route path="/google-books/:search" element={<SearchPage />} />
            <Route
                path="/google-books/favourites"
                element={<FavouritesPage />}
            />
            <Route path="/google-books/*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
