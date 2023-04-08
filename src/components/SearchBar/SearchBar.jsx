import React, { useState } from "react";

const SearchBar = (props) => {
    const { onSubmit } = props;
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
        setSearch("");
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={search} />
            </form>
        </div>
    );
};

export default SearchBar;
