const removeDuplicateBooks = (array) => {
    return array.reduce((acc, curr) => {
        if (!acc.find((book) => book.id === curr.id)) {
            acc.push(curr);
        }
        return acc;
    }, []);
};
export default removeDuplicateBooks;
