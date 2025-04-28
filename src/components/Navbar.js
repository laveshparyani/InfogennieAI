import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaStar, FaTags, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome className="inline mr-2 mb-1" /> },
    { name: 'Features', path: '/features', icon: <FaStar className="inline mr-2 mb-1" /> },
    { name: 'Pricing', path: '/pricing', icon: <FaTags className="inline mr-2 mb-1" /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle className="inline mr-2 mb-1" /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope className="inline mr-2 mb-1" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.95, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center"
            >
              <span className="text-white text-xl font-bold">I</span>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:drop-shadow-lg transition-all duration-300">
              InfogennieAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative flex items-center">
                <Link
                  to={link.path}
                  className={`flex items-center text-sm font-medium transition-colors duration-200 px-2 py-1 ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.icon}{link.name}
                </Link>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    style={{ zIndex: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <FaSignInAlt className="mr-2" /> Log in
              </Link>
              <Link
                to="/register"
                className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                <FaUserPlus className="mr-2" /> Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-3 py-2 rounded-lg text-base font-medium ${
                location.pathname === link.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.icon}{link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-2">
            <Link
              to="/login"
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaSignInAlt className="mr-2" /> Log in
            </Link>
            <Link
              to="/register"
              className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUserPlus className="mr-2" /> Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 