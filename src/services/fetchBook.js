const fetchBook = async (searchTerm, startIndex = "0") => {
    const maxResults = 40;
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm.replace(
            /\s/g,
            "+"
        )}&maxResults=${maxResults}&startIndex=${startIndex}`
    );
    const data = await response.json();
    return data;
};

export const loadMoreBooks = async (searchTerm, bookSearch, setBookSearch) => {
    const moreBooks = await fetchBook(searchTerm, bookSearch.length);
    setBookSearch([...bookSearch, ...moreBooks.items]);
};
export const initialSearch = async (
    search,
    setBookSearch,
    setLoading,
    setNoBooks
) => {
    const data = await fetchBook(search);
    setLoading(false);
    if (!data.items) {
        setNoBooks(true);
    } else {
        setBookSearch([...data.items]);
    }
};

export default fetchBook;
