import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요..."
      className="border rounded-md px-4 py-2 w-64"
    />
  );
};

export default SearchBar;
