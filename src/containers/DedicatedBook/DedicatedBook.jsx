import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const DedicatedBook = ({ book }) => {
    const { volumeInfo } = book;
    console.log(book);
    return (
        <div>
            <NavigationBar />
            <div>
                <h1>{volumeInfo.title}</h1>
            </div>
        </div>
    );
};

export default DedicatedBook;
