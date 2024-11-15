import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Web Development",
      company: "Company Name",
      date: "Dec 2022 - Jan 2023",
      description: [
        "Tech stack: HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
        "Learned to read code better and understand SQL databases",
        "Made content updates with company-developed database"
      ]
    },
    {
      title: "Java Programming",
      company: "Codesoft Tech",
      date: "Mar 2023",
      description: [
        "Designed and implemented key features using Java",
        "Worked on diverse projects showcasing Java's versatility",
        "Gained real-world project experience"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
            <p className="text-purple-600 mb-2">{exp.company}</p>
            <p className="text-gray-600 mb-4">{exp.date}</p>
            <ul className="list-disc pl-5 text-gray-700">
              {exp.description.map((item, i) => (
                <li key={i} className="mb-1">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}