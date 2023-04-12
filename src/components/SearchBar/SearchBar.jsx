import React, { useContext, useState } from "react";
import { SearchQueryContext } from "../../contexts/SearchQueryProvider";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchQueryContext);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(search);
        navigate(`/books/${search.replace(/[\s]/g, "+")}`);
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <input type="text" value={search} />
        </form>
    );
};

export default SearchBar;
