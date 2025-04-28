import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserPlus } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/40 to-blue-200/40 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md mx-auto"
      >
        {/* Brand/Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-2 shadow-lg">
            <FaUserPlus className="text-white text-4xl" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            InfogennieAI
          </span>
        </div>
        {/* Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-2xl px-8 py-10"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">Create your account</h2>
          <p className="text-center text-gray-600 mb-8">
            Or{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-indigo-700 transition-colors">
              sign in to your existing account
            </Link>
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            >
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90"
                placeholder="Enter your full name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90"
                placeholder="Create a password"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
            >
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90"
                placeholder="Re-enter your password"
              />
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)' }}
              className="w-full flex justify-center py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg mt-2"
            >
              Create account
            </motion.button>
          </form>
          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="mx-4 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>
          {/* Social Register Placeholder */}
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.10)' }}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-semibold text-blue-700 bg-white border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.22-1.41 3.59-5.27 3.59-3.18 0-5.78-2.63-5.78-5.86s2.6-5.86 5.78-5.86c1.81 0 3.03.77 3.73 1.43l2.54-2.47C16.13 3.98 14.29 3 12.17 3 6.88 3 2.5 7.42 2.5 12.65c0 5.23 4.38 9.65 9.67 9.65 5.29 0 9.67-4.42 9.67-9.65 0-.65-.07-1.28-.19-1.88z" /></svg>
            Sign up with Google
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register; 