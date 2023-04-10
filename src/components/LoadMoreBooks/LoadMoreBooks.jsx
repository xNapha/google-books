import React from "react";

const LoadMoreBooks = ({ string }) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <>
            <button onClick={handleClick}>{string}</button>
        </>
    );
};

export default LoadMoreBooks;
