import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    "MERN Stack", "JavaScript", "Java", "C", "HTML/CSS", "jQuery", "PHP", "MySQL", "SQL", "React.js",
    "VS Code", "Git", "GitHub", "Bootstrap", "TailwindCSS"
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full shadow-md text-white font-medium hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}