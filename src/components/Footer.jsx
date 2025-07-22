// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="p-6 text-center bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white mt-10"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <p>&copy; {new Date().getFullYear()} Hill's Portfolio. Built with 💙</p>
    </motion.footer>
  );
}
