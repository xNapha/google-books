import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage.jsx";
import SearchPage from "./containers/SearchPage/SearchPage.jsx";
import NotFound from "./containers/NotFound/NotFound.jsx";
import FavouritesPage from "./containers/FavouritesPage/FavouritesPage.jsx";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:search" element={<SearchPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
