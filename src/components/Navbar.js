import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const navLinks = [
  { name: 'Product', to: '#' },
  { name: 'Solutions', to: '#' },
  { name: 'Industries', to: '#' },
  { name: 'Customers', to: '#' },
  { name: 'Company', to: '#' },
  { name: 'Resources', to: '#' },
  { name: 'Consulting', to: '#' },
  { name: 'Dashboards', to: '#' },
  { name: 'Pricing', to: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`bg-white border-b-2 border-[color:var(--color-primary)]/20 sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container-custom flex items-center justify-between py-2">
        {/* Left: Logo and Brand */}
        <div className="flex items-center space-x-3 min-w-[220px]">
          <img src={logo} alt="InfogennieAI Logo" className="h-10 w-10 object-contain" />
          <span className="font-extrabold text-2xl text-[color:var(--color-primary)] tracking-tight whitespace-nowrap">InfogennieAI</span>
        </div>
        {/* Center: Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="text-gray-800 hover:text-[color:var(--color-primary)] transition-colors font-medium px-2 py-1 rounded text-base"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Right: Actions */}
        <div className="hidden lg:flex items-center space-x-4 ml-4">
          <Link to="/register" className="px-6 py-2 rounded-lg font-semibold bg-[color:var(--color-primary)] text-white shadow hover:bg-[color:var(--color-accent)] transition-all duration-200 text-base">Try for free</Link>
          <a href="#" className="px-6 py-2 rounded-lg font-semibold bg-[color:var(--color-accent)] text-white shadow hover:bg-[color:var(--color-primary)] transition-all duration-200 text-base">Book a Demo</a>
          <a href="#" className="px-6 py-2 rounded-lg font-semibold border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] bg-white hover:bg-[color:var(--color-primary)] hover:text-white transition-all duration-200 text-base">Contact Us</a>
        </div>
        {/* Hamburger */}
        <button
          className="lg:hidden flex items-center px-2 py-1 border rounded text-[color:var(--color-primary)] border-[color:var(--color-primary)] focus:outline-none ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[color:var(--color-primary)]/20 px-4 pb-4 animate-fade-in">
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.to} className="text-gray-700 hover:text-[color:var(--color-primary)] py-2 border-b border-gray-100 font-medium">
                {link.name}
              </a>
            ))}
            <Link to="/register" className="px-6 py-2 rounded-lg font-semibold bg-[color:var(--color-primary)] text-white shadow hover:bg-[color:var(--color-accent)] transition-all duration-200 mt-2">Try for free</Link>
            <a href="#" className="px-6 py-2 rounded-lg font-semibold bg-[color:var(--color-accent)] text-white shadow hover:bg-[color:var(--color-primary)] transition-all duration-200 mt-2">Book a Demo</a>
            <a href="#" className="px-6 py-2 rounded-lg font-semibold border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] bg-white hover:bg-[color:var(--color-primary)] hover:text-white transition-all duration-200 mt-2">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 