// SearchBar.jsx

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };


  const handleClear = () => {
    setSearchQuery(""); // Clear the query state
    onSearch(""); // Call the onSearch callback with an empty query to reset articles
  };


  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search articles..."
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
      {searchQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-700"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
