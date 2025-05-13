import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center mt-20 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white/70 backdrop-blur-2xl border border-blue-100">
          {/* Left: Contact Info & Form */}
          <div className="flex-1 flex flex-col justify-center p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-8 text-lg max-w-md">We'd love to hear from you! Reach out for support, partnership, or any questions about InfogennieAI.</p>
            {/* Contact Info Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100 p-6 mb-8">
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4 text-xl font-bold">📞</span>
                <span className="text-lg font-medium text-gray-800">+91 95105 16724 <span className="text-xs text-gray-500">(KENIL LAD)</span></span>
              </div>
              <div className="flex items-center mb-4">
                <span className="inline-block w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4 text-xl font-bold">✉️</span>
                <span className="text-lg font-medium text-gray-800">infogennieai@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4 text-xl font-bold">⏰</span>
                <span className="text-gray-700 text-base">Mon - Fri: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
            {/* Contact Form */}
            <form className="bg-white/90 rounded-xl shadow-xl border border-blue-100 p-6 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Send us a message</h3>
              <input type="text" name="name" placeholder="Your Name" required className="px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90" />
              <input type="email" name="email" placeholder="Your Email" required className="px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90" />
              <textarea name="message" placeholder="Your Message" rows="4" required className="px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base bg-white/90 resize-none" />
              <motion.button type="submit" whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)' }} className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg mt-2">Send Message</motion.button>
            </form>
          </div>
          {/* Right: Illustration */}
          <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 p-10 w-1/2">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Contact Illustration" className="rounded-2xl shadow-lg w-80 h-80 object-cover mb-6" />
            <div className="text-center">
              <h4 className="text-xl font-bold text-blue-700 mb-1">We're here to help!</h4>
              <p className="text-gray-600">Our team will get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 