import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 py-10">

      <motion.h1 {...fadeUp} className="text-4xl font-bold mb-8">
        Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6">

        <motion.div
          {...fadeUp}
          className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <h2 className="text-xl font-semibold">AI Chatbot Platform</h2>

          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            Built an AI chatbot using Mistral with RAG architecture, enabling
            real-time, context-aware responses.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            React • Node.js • LLM • RAG
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition"
        >
          <h2 className="text-xl font-semibold">Subscription System</h2>

          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
            Implemented Stripe-based subscription billing with plan management,
            upgrades, and usage limits.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            React • Node.js • Stripe • MongoDB
          </p>
        </motion.div>

      </div>

    </section>
  );
}