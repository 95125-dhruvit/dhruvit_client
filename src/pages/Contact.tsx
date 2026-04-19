import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-16 py-10">

      <motion.h1 {...fadeUp} className="text-4xl font-bold mb-6">
        Contact
      </motion.h1>

      <motion.p {...fadeUp} className="text-gray-600 dark:text-gray-400 mb-8">
        Feel free to reach out for opportunities, collaborations, or discussions.
      </motion.p>

      <motion.form {...fadeUp} className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>

      </motion.form>
    </section>
  );
}