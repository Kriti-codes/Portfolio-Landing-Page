import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-purple-600 mr-4" />
              <span className="text-gray-700">+91 7355715798</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-purple-600 mr-4" />
              <a href="mailto:sukritiy39@gmail.com" className="text-gray-700 hover:text-purple-600 transition duration-300">
                sukritiy39@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Github className="w-6 h-6 text-purple-600 mr-4" />
              <a href="https://github.com/Kriti-codes" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition duration-300">
                github.com/Kriti-codes
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-purple-600 mr-4" />
              <a href="https://www.linkedin.com/in/sukriti-27-yadav" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition duration-300">
                linkedin.com/in/sukriti-27-yadav
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-purple-600 mr-4" />
              <span className="text-gray-700">Kanpur, Uttar Pradesh 208009</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <a
              href="mailto:sukritiy39@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <p className="mt-4 text-gray-600 text-center">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}