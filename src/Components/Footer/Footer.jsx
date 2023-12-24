import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  // Define animation variants for the footer
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      transition={{ duration: 0.5 }}
      className="bg-black text-white"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b border-gray-700 pb-8">
          <h2 className="text-3xl font-bold">
            Effortless Task Management, <br></br> Elevated Productivity
          </h2>
          <div className="space-x-3">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Unlock Premium Features with Our Exclusive Free Trial
            </button>
            
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold">FEATURES</h3>
            <ul className="mt-4 space-y-4">
              <li>Intuitive Task Creation</li>
              <li>Smart Task Organization</li>
              <li>Interactive Dashboard</li>
              <li>Advanced Filtering</li>
              <li>Task Progress Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">FEATURES</h3>
            <ul className="mt-4 space-y-4">
              <li>Intuitive Task Creation</li>
              <li>Smart Task Organization</li>
              <li>Interactive Dashboard</li>
              <li>Advanced Filtering</li>
              <li>Task Progress Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">FEATURES</h3>
            <ul className="mt-4 space-y-4">
              <li>Intuitive Task Creation</li>
              <li>Smart Task Organization</li>
              <li>Interactive Dashboard</li>
              <li>Advanced Filtering</li>
              <li>Task Progress Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">FEATURES</h3>
            <ul className="mt-4 space-y-4">
              <li>Intuitive Task Creation</li>
              <li>Smart Task Organization</li>
              <li>Interactive Dashboard</li>
              <li>Advanced Filtering</li>
              <li>Task Progress Tracking</li>
            </ul>
          </div>
          {/* Repeat for other columns */}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p>© 2023 TaskFlow All Rights Reserved</p>
          <div className="flex space-x-4">
            {/* Social icons go here */}
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
