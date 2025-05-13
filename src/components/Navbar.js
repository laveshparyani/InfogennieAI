import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaStar, FaTags, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserPlus, FaChevronDown, FaNewspaper, FaBook, FaQuestionCircle, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutDropdownItems = [
    { name: 'About', path: '/about', icon: <FaInfoCircle className="mr-2 align-middle w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FaNewspaper className="mr-2 align-middle w-4 h-4" /> },
    { name: 'Press', path: '/press', icon: <FaNewspaper className="mr-2 align-middle w-4 h-4" /> },
    { name: 'Resources', path: '/resources', icon: <FaBook className="mr-2 align-middle w-4 h-4" /> },
    { name: 'Documentation', path: '/docs', icon: <FaFileAlt className="mr-2 align-middle w-4 h-4" /> },
    { name: 'Help Center', path: '/help', icon: <FaQuestionCircle className="mr-2 align-middle w-4 h-4" /> },
    { name: 'Guides', path: '/guides', icon: <FaBook className="mr-2 align-middle w-4 h-4" /> },
  ];

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome className="mr-2 align-middle" /> },
    { name: 'Features', path: '/features', icon: <FaStar className="mr-2 align-middle" /> },
    { name: 'Pricing', path: '/pricing', icon: <FaTags className="mr-2 align-middle" /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle className="mr-2 align-middle" /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope className="mr-2 align-middle" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-white/95 border-b border-gray-100'
    }`} style={{ minHeight: '60px', height: '60px' }}>
      <div className="w-full mx-auto px-0">
        <div className="flex items-center h-[60px] w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center justify-start w-[190px] pl-12 ml-0">
            <Link to="/" className="flex items-center space-x-2 group ml-0 pl-0">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                whileTap={{ scale: 0.97, rotate: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow"
              >
                <span className="text-white text-lg font-bold">I</span>
              </motion.div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:drop-shadow-lg transition-all duration-300 whitespace-nowrap">
                InfogennieAI
              </span>
            </Link>
          </div>
          {/* Center: Nav Links */}
          <div className="flex-1 flex justify-center items-center">
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <div key={link.path} className="relative flex items-center">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center text-base font-medium transition-colors duration-200 px-2 py-1 ${
                          location.pathname === link.path
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {link.icon}{link.name}
                        <FaChevronDown className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                          isAboutDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {isAboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white shadow-lg border border-gray-100 py-2"
                          >
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                              >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center text-base font-medium transition-colors duration-200 px-2 py-1 ${
                        location.pathname === link.path
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {link.icon}{link.name}
                    </Link>
                  )}
                  <AnimatePresence>
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          mass: 1
                        }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Get Started & Login */}
          <div className="flex-shrink-0 flex items-center space-x-4 justify-end pr-12 mr-0">
            <Link
              to="/register"
              className="flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition-all duration-150"
              style={{ height: '40px' }}
            >
              <FaUserPlus className="mr-2" /> Get Started
            </Link>
            <Link
              to="/login"
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-blue-400 transition-all duration-150 shadow-sm"
              style={{ height: '40px' }}
            >
              <FaSignInAlt className="mr-2" /> Log in
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none ml-2"
          >
            <svg
              className="w-7 h-7"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium ${
                          location.pathname === link.path
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="flex items-center">
                          {link.icon}{link.name}
                        </span>
                        <FaChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isAboutDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <AnimatePresence>
                        {isAboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/register"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaUserPlus className="mr-2" /> Get Started
                </Link>
                <Link
                  to="/login"
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaSignInAlt className="mr-2" /> Log in
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 