import React from "react";

const Search = () => {
  return (
    <div className="search">
      <h1 className="title">This is Search Component</h1>

      <input
        className="search-input"
        type="text"
        name="search"
        id="search"
        placeholder="Search by Contact name..."
      />
    </div>
  );
};

export default Search;