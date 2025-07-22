// components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 flex justify-between items-center shadow-md dark:shadow-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-50"
    >
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Hill's Portfolio</h1>
      <div className="flex items-center gap-4">
        <a href="#about" className="hover:underline transition-colors">About</a>
        <a href="#projects" className="hover:underline transition-colors">Projects</a>
        <a href="#contact" className="hover:underline transition-colors">Contact</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded hover:scale-105 transition-transform"
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </motion.nav>
  );
}