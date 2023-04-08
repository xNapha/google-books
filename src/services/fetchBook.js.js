const fetchBook = async (string) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${string.replace(
            /\s/g,
            "+"
        )}`
    );
    const data = await response.json();
    return data.items;
};

export default fetchBook;
