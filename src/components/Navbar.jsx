import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'About', path: '/about' },
    {
      name: 'Products',
      hasDropdown: true,
      submenu: [
        { name: 'Chargeback Alerts', path: '/products/chargeback-alerts' },
        { name: 'VAMP Monitor', path: '/products/vamp-monitor' },
        { name: 'Transaction Risk Tool API', path: '/products/transaction-risk-tool' },
        { name: 'Payment Gateway', path: '/products/payment-gateway' },
        { name: 'White Label Solutions', path: '/products/white-label-solutions' }
      ]
    },
    {
      name: 'Payment Solution',
      hasDropdown: true,
      submenu: [
        { name: 'Acquirers Matching', path: '/payment-solution/acquirers-matching' },
        { name: 'Referral Services', path: '/payment-solution/referral-services' },
        { name: 'Application Consulting', path: '/payment-solution/application-consulting' },
        { name: 'High-Risk Merchant Specialist', path: '/payment-solution/high-risk-merchant' }
      ]
    },
    { name: 'Resellers', path: '/resellers' }
  ];

  const handleMouseEnter = (itemName) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
    setCloseTimeout(timeout);
  };

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
              <img src={logo} alt="OrcaPay Logo" className="h-16 w-auto transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation - Center Menu Items */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative flex items-center space-x-1">
                    <span>{item.name}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                  {openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-64 bg-gray-800/95 backdrop-blur-md rounded-lg border border-cyan-500/30 shadow-lg shadow-cyan-500/10 py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => scrollToSection(item.hash)}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            ))}
          </div>

          {/* Right Side - Contact Us */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
              <span className="relative z-10">Contact Us</span>
            </Link>
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
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              ))}
              <Link to="/contact" className="w-full mt-4 bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg block text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;