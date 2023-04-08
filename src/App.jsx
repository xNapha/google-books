import CardList from "./containers/CardList/CardList";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (string) => {
        setSearchTerm(string);
    };
    console.log(searchTerm);

    return (
        <>
            <header>
                <img src="" alt="Google Books" />
                <SearchBar onSubmit={handleSubmit} />
            </header>
            <main>
                <CardList />
                <Modal />
            </main>
            <footer> </footer>
        </>
    );
};

export default App;
