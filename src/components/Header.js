import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">Inflearn</Link>
        <SearchBar />
        <nav>
          <Link to="/login" className="mr-4">로그인</Link>
          <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded">회원가입</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
