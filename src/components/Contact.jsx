// components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="p-10 text-center max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <div className="flex justify-center gap-6 text-3xl text-blue-600 dark:text-blue-400">
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:your@email.com"><FaEnvelope /></a>
      </div>
    </section>
  );
}