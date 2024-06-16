import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Call API or perform search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <nav class="navbar" className='new'>
    <form class="pull-left">
      <input class="search-query" type="search" placeholder="Search"/>
      <button class="btn" type="submit">Search</button>
    </form>
  </nav>
  );
};

export default SearchBar;