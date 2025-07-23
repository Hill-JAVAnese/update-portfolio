import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sistem Diagnosa Penyakit (Manusia)',
    desc: 'Sistem Diagnosa Penyakit menggunakan Python dan CSV sebagai dataset.',
    img: 'https://i.imgur.com/93Db0kx.png',
    link: 'https://web-production-cccc1.up.railway.app/',
  },
  {
    title: 'Coming Soon...',
    desc: '-',
    img: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Coming Soon...',
    desc: '-',
    img: 'https://via.placeholder.com/300x200',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-10 max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="rounded-xl overflow-hidden shadow-md dark:shadow-blue-800 hover:scale-105 transition-transform bg-white dark:bg-gray-800"
            whileHover={{ scale: 1.05 }}
          >
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              </a>
            ) : (
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
