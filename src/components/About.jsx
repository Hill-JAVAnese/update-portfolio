// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="p-10 max-w-3xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm a passionate developer who enjoys working with React and creating immersive game projects. With a love for learning and pushing creative boundaries, I'm excited to share my portfolio with you!
        Playing games is always and my fav for now is minecraft. 
        Interested to be Fullstack Web Developer even still learning and still on basic level.
      </motion.p>
    </section>
  );
}
