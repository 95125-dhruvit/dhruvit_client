import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 md:px-16">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
              Dhruvit
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl"
          >
            Full Stack Developer focused on building production-grade systems
            using React, Node.js, and scalable backend architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="/projects"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium transition hover:opacity-90"
            >
              View Work
            </a>

            <a
              href="/contact"
              className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contact Me
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= SYSTEMS ================= */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-16">

          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10">
            Systems I Work On
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Scalable Applications",
                desc: "Built with performance and real users in mind.",
              },
              {
                title: "API Integrations",
                desc: "Payments, document systems, and external services.",
              },
              {
                title: "AI Systems",
                desc: "Smart features powered by modern AI workflows.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 md:px-16">

          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10">
            Impact & Responsibilities
          </motion.h2>

          <motion.div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
            <p>• Build production-level React applications</p>
            <p>• Develop scalable Node.js APIs</p>
            <p>• Integrate third-party services</p>
            <p>• Optimize performance & reliability</p>
            <p>• Work on real-world user systems</p>
          </motion.div>

        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">

          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-6">
            Engineering Approach
          </motion.h2>

          <motion.p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I focus on clean architecture, scalability, and performance —
            building systems that are reliable and maintainable long-term.
          </motion.p>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-16">

          <motion.h2 {...fadeUp} className="text-3xl font-bold mb-10">
            Selected Work
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {["AI Chatbot System", "Payment Platform"].map((project, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition"
              >
                <h3 className="text-xl font-semibold">{project}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  Designed for real-world usage with scalable architecture.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <motion.h2 {...fadeUp} className="text-3xl font-bold">
            Open to impactful opportunities
          </motion.h2>

          <motion.p className="text-gray-600 dark:text-gray-400 mt-4">
            Looking to contribute to teams building scalable products.
          </motion.p>

          <motion.a
            href="/contact"
            className="inline-block mt-8 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Get in Touch
          </motion.a>

        </div>
      </section>

    </div>
  );
}