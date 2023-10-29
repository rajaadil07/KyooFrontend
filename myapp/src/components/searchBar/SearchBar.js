import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.length > 1) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Album/Artist/Song..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      {query.length > 1 && (
        <button className="search-button" onClick={handleSearch}>
          Find!
        </button>
      )}
    </div>
  );
};

export default SearchBar;
