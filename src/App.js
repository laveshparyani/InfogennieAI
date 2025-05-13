import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

// Import pages
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Press from './pages/Press';
import Resources from './pages/Resources';
import Documentation from './pages/Documentation';
import HelpCenter from './pages/HelpCenter';
import Guides from './pages/Guides';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 