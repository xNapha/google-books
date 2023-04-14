import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import SearchPage from "./containers/SearchPage/SearchPage";
import NotFound from "./containers/NotFound/NotFound";
import Favourites from "./containers/Favourites/Favourites";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:search" element={<SearchPage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
