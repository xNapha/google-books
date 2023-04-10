import CardList from "./containers/CardList/CardList";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBooks from "./components/LoadMoreBooks/LoadMoreBooks";
import { useState, useEffect } from "react";
const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [bookModal, setBookModal] = useState("");
    const [numOfItems, setNumOfItems] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (string) => {
        setSearchTerm(string);
    };

    const showBookModal = (book) => {
        setBookModal(book);
    };
    const getNumOfItems = (num) => {
        setNumOfItems(num);
    };

    const returnTotalNumOfItems = (numOfItems) => {
        if (!numOfItems) return;
        return `Returned a result of ${numOfItems} books.`;
    };

    useEffect(() => {
        console.log("hello");
    }, [numOfItems]);

    return (
        <>
            <header id="top">
                <img src="" alt="Google Books" />
                <SearchBar onSubmit={handleSubmit} />
            </header>
            <main>
                <p>{returnTotalNumOfItems(numOfItems)}</p>
                <CardList
                    searchTerm={searchTerm}
                    showBookModal={showBookModal}
                    getNumOfItems={getNumOfItems}
                />
                <Modal bookModal={bookModal} />
            </main>
            <footer>
                <LoadMoreBooks string="Left" />

                <LoadMoreBooks string="Right" />
                <a
                    href="
                #top"
                >
                    Top
                </a>
            </footer>
        </>
    );
};

export default App;
