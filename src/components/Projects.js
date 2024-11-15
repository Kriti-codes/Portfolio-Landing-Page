import React from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: "Employee Management System",
      description: "A full-stack employee management system with CRUD operations. Built using the MERN stack (MongoDB, Express, React, Node.js).",
      link: "https://github.com/Kriti-codes/Employee--Management--System",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      name: "Shopping Telegram Bot",
      description: "A Telegram bot for shopping assistance built with React.js, CSS, and Node.js. Features include product browsing, cart management, and order processing.",
      link: "https://github.com/Kriti-codes/Shopping-bot",
      tech: ["React.js", "CSS", "Node.js"]
    },
    {
      name: "Task Manager",
      description: "A responsive task management application built with React.js and JavaScript. Helps users organize and track their daily tasks efficiently.",
      link: "https://github.com/Kriti-codes/Task-Manager-",
      tech: ["React.js", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-yellow-400"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 font-medium flex items-center group"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}