const fetchBook = async (searchTerm, setBookSearch, setTotalBooks) => {
    const maxResults = 40;
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm.replace(
            /\s/g,
            "+"
        )}&maxResults=${maxResults}`
    );
    const data = await response.json();
    setTotalBooks(data.totalItems);
    const books = data.items;
    setBookSearch(books);
};

export default fetchBook;
