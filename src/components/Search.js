import React from 'react';

function Search() {
  return (
    <div className="search-page">
      <h2>Search for Buses</h2>
      <input type="text" placeholder="Enter Source" className="search-input" />
      <input type="text" placeholder="Enter Destination" className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
}

export default Search;
