// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="p-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Hasda 👋
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl"
      >
        Game enthusiast & student passionate about building cool stuff.
      </motion.p>
    </section>
  );
}