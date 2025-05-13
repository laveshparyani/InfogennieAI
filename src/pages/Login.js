import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-blue-100 mt-12 mb-12">
          {/* Left: Illustration/Brand */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 p-10 w-1/2">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Welcome" className="rounded-xl shadow-lg mb-6 w-60 h-60 object-cover" />
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Welcome Back!</h2>
            <p className="text-gray-600 text-center">Sign in to access your InfogennieAI dashboard and unlock the power of data-driven insights.</p>
          </div>
          {/* Right: Login Form */}
          <div className="flex-1 flex flex-col justify-center p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">Sign in to your account</h2>
            <p className="text-center text-gray-600 mb-8">
              Or{' '}
              <Link to="/register" className="font-semibold text-blue-600 hover:text-indigo-700 transition-colors">
                create a new account
              </Link>
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-indigo-700 transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)' }}
                className="w-full flex justify-center py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg mt-2"
              >
                Sign in
              </motion.button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-4 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            {/* Social Login Placeholder */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.10)' }}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-semibold text-blue-700 bg-white border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.22-1.41 3.59-5.27 3.59-3.18 0-5.78-2.63-5.78-5.86s2.6-5.86 5.78-5.86c1.81 0 3.03.77 3.73 1.43l2.54-2.47C16.13 3.98 14.29 3 12.17 3 6.88 3 2.5 7.42 2.5 12.65c0 5.23 4.38 9.65 9.67 9.65 5.29 0 9.67-4.42 9.67-9.65 0-.65-.07-1.28-.19-1.88z" /></svg>
              Sign in with Google
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 