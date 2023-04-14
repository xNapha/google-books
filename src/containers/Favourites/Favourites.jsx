import React, { useContext, useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { FavouritesContext } from "../../contexts/FavouritesProvider";
import Card from "../../components/Card/Card";

const Favourites = () => {
    const { favourites, setFavourites } = useContext(FavouritesContext);
    const [favBooks, setFavBooks] = useState([]);
    useEffect(() => {
        localStorage.setItem("Favourites", JSON.stringify(favourites));
        const storage = localStorage.getItem("Favourites");
        setFavBooks(JSON.parse(storage));
    }, []);

    const createContent = favBooks.map((book) => (
        <Card
            key={book.id}
            title={book.volumeInfo?.title ?? ""}
            authors={book.volumeInfo?.authors ?? []}
            image={book.volumeInfo.imageLinks?.thumbnail ?? ""}
            book={book}
        />
    ));
    return (
        <div>
            <NavigationBar />
            {createContent}
        </div>
    );
};

export default Favourites;
