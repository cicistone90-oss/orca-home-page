import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [];

  const scrollToSection = (hash) => {
    if (hash && location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img src="/logo.png" alt="OrcaPay Logo" className="h-16 w-auto transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => scrollToSection(item.hash)}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a href="/contact" className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 relative overflow-hidden group">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    scrollToSection(item.hash);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <a href="/contact" className="w-full mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:via-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg block text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;