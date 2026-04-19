import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-16 py-10">

      <motion.h1 {...fadeUp} className="text-4xl font-bold mb-8">
        Experience
      </motion.h1>

      <motion.div
        {...fadeUp}
        className="border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
      >
        <h2 className="text-xl font-semibold">
          Full Stack Developer
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          Canada-based Company • Present
        </p>

        <ul className="mt-5 text-gray-600 dark:text-gray-400 text-sm space-y-2 list-disc pl-5">
          <li>Develop and maintain production-level React applications</li>
          <li>Design and build scalable backend APIs using Node.js</li>
          <li>Integrate third-party services (DocuSign, payment systems)</li>
          <li>Optimize application performance and reliability</li>
          <li>Work on real-world systems used by active users</li>
        </ul>
      </motion.div>

    </section>
  );
}