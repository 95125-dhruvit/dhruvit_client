import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 py-10">

      {/* TITLE */}
      <motion.h1
        {...fadeUp}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h1>

      {/* INTRO */}
      <motion.p
        {...fadeUp}
        className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
      >
        I’m a Full Stack Developer currently working with a Canada-based company,
        where I contribute to building production-grade web applications used by real users.
        My work involves designing scalable systems, developing APIs, and integrating
        modern technologies to solve practical business problems.
      </motion.p>

      {/* EXPERIENCE BLOCK */}
      <motion.div
        {...fadeUp}
        className="mt-10 border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold mb-3">
          Current Role
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          As a Full Stack Developer, I work across the entire stack — from building
          responsive frontend interfaces in React to designing backend systems using Node.js.
          I regularly handle API integrations, optimize performance, and ensure that
          applications remain reliable and maintainable at scale.
        </p>
      </motion.div>

      {/* SKILLS / STACK */}
      <motion.div {...fadeUp} className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Core Technologies
        </h2>

        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "REST APIs",
            "AI / LLM Integration",
          ].map((tech, i) => (
            <span
              key={i}
              className="border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ENGINEERING MINDSET */}
      <motion.div {...fadeUp} className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          How I Work
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I focus on writing clean, maintainable code and building systems that
          scale effectively. My approach emphasizes performance, reliability, and
          long-term maintainability rather than quick fixes. I aim to create
          solutions that are not only functional but also sustainable as products grow.
        </p>
      </motion.div>

    </section>
  );
}