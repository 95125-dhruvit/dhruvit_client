import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors">

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">

        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
            Let’s build something impactful together 🚀
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Open to remote opportunities and collaborations
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-black dark:text-white">
              Dhruvit Soni
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Full Stack Developer specializing in React, Node.js & AI systems.
            </p>
          </div>

          {/* CENTER NAV */}
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              About
            </Link>
            <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* RIGHT SOCIALS */}
          <div className="flex justify-center md:justify-end gap-6">

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub size={20} />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </motion.a>

            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <MdEmail size={20} />
            </motion.a>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Dhruvit Soni. All rights reserved.
        </div>

      </div>
    </footer>
  );
}