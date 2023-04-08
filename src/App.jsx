import CardList from "./containers/CardList/CardList";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [bookModal, setBookModal] = useState("");

    const handleSubmit = (string) => {
        setSearchTerm(string);
    };

    const showBookModal = (book) => {
        setBookModal(book);
    };

    return (
        <>
            <header>
                <img src="" alt="Google Books" />
                <SearchBar onSubmit={handleSubmit} />
            </header>
            <main>
                <CardList
                    searchTerm={searchTerm}
                    setBookModal={showBookModal}
                />
                <Modal bookModal={bookModal} />
            </main>
            <footer> </footer>
        </>
    );
};

export default App;
