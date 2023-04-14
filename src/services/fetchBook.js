const fetchBook = async (searchTerm, startIndex = "0") => {
    const maxResults = 40;
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm.replace(
            /\s/g,
            "+"
        )}&maxResults=${maxResults}&startIndex=${startIndex}`
    );
    const data = await response.json();
    console.log(data);
    return data;
};

export const loadMoreBooks = async (searchTerm, bookSearch, setBookSearch) => {
    const moreBooks = await fetchBook(searchTerm, bookSearch.length);
    setBookSearch([...bookSearch, ...moreBooks.items]);
};
export const initialSearch = async (
    search,
    bookSearch,
    setBookSearch,
    setLoading
) => {
    const data = await fetchBook(search);
    setBookSearch([...bookSearch, ...data.items]);
    setLoading(false);
};

export default fetchBook;
