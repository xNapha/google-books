import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import SearchPage from "./containers/SearchPage/SearchPage";
import NotFound from "./containers/NotFound/NotFound";
import FavouritesPage from "./containers/FavouritesPage/FavouritesPage";
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
