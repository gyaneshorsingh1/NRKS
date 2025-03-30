import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const Search = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search for a Course or Internship..." />
    <button>
      <FaSearch />
    </button>
  </div>
);

export default Search;
