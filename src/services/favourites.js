export const addToFavourites = (favourites, setFavourites, book) => {
    if (favourites.length === 0) return setFavourites([book]);
    favourites.find((curr) => {
        if (curr.id !== book.id) return setFavourites([...favourites, book]);
    });
};

export const deleteFromFavourites = (favourites, setFavourites, book) => {
    const filteredFavourites = favourites.filter((curr) => curr.id !== book.id);
    console.log(filteredFavourites);
    return setFavourites(filteredFavourites);
};

export const checkFavourites = (favourites, setFavourites, book) => {
    if (!book.favourite) {
        book.favourite = true;
        addToFavourites(favourites, setFavourites, book);
    } else {
        book.favourite = false;
        deleteFromFavourites(favourites, setFavourites, book);
    }
};
