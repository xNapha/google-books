const fetchBook = async (string, maxResults) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${string.replace(
            /\s/g,
            "+"
        )}&maxResults=${maxResults}`
    );
    const data = await response.json();
    return data;
};

export default fetchBook;
