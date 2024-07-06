import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link to="/">MyWebsite</Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/blog" className="hover:text-white">Blog</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/profile" className="hover:text-white">
            <i className="fas fa-user"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
