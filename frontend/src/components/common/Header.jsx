// src/components/common/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          SneakerHub
        </Link>
        <div className="flex space-x-4">
          <Link to="/shoes" className="text-gray-600 hover:text-gray-900">
            Browse Shoes
          </Link>
          <Link to="/sell" className="text-gray-600 hover:text-gray-900">
            Sell Shoes
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;