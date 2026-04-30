import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  // const text = "Dhruvit Harshadbhai Soni";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Dhruvit Harshadbhai Soni",
    "a Full Stack Developer",
    "building scalable systems",
    "creating AI applications",
  ];

  useEffect(() => {
    const currentText = phrases[index];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length + 1));
      }, 70);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, displayed.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          setIsDeleting(true);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 1200); // pause
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">

          {/* fade (desktop only) */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ================= LEFT TEXT ================= */}
            <div className="relative z-20 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Hi, I'm{" "}
                <span
                  className="
              inline-block
              w-[18ch] sm:w-[20ch] md:w-[24ch]
              bg-gradient-to-r from-black to-gray-500
              dark:from-white dark:to-gray-500
              bg-clip-text text-transparent
            "
                >
                  {displayed}
                  <span className="ml-1 inline-block w-[1ch] animate-pulse">|</span>
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

            {/* ================= RIGHT IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="
          flex justify-center
          relative z-10
          ml-0 md:-ml-20 lg:-ml-32
        "
            >
              <motion.img
                src="/dhruvit.png"
                alt="Hero"
                className="
            w-[240px]
            sm:w-[280px]
            md:w-[380px]
            lg:w-[420px]
            object-contain
            opacity-90
          "
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

          </div>
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
                title: "Full-Stack Applications",
                desc: "End-to-end web applications built for performance, scalability, and real users.",
              },
              {
                title: "API & System Integrations",
                desc: "Connecting third-party services, payments, and external systems seamlessly.",
              },
              {
                title: "Scalable Backend Systems",
                desc: "Robust and efficient backend architectures designed for reliability and growth.",
              },
              {
                title: "Authentication & Security",
                desc: "Secure user authentication, authorization, and data protection across applications.",
              },
              {
                title: "Real-Time Systems",
                desc: "Interactive features like live updates, messaging, and event-driven functionality.",
              },
              {
                title: "Performance Optimization",
                desc: "Improving speed, efficiency, and scalability for better user experience.",
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
      <section className="py-28 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 md:px-16">

          {/* Heading */}
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-semibold mb-16 tracking-tight"
          >
            Impact & Responsibilities
          </motion.h2>

          {/* Timeline */}
          <div className="relative">

            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Building Production Systems",
                  desc: "Develop and maintain real-world applications used by active users, ensuring stability and scalability.",
                },
                {
                  title: "Owning Backend Architecture",
                  desc: "Design APIs and system structures that scale efficiently while maintaining performance and reliability.",
                },
                {
                  title: "End-to-End Feature Delivery",
                  desc: "Take full ownership of features — from frontend interfaces to backend logic and database design.",
                },
                {
                  title: "Integrating External Services",
                  desc: "Connect payments, APIs, and third-party tools to extend product capabilities seamlessly.",
                },
                {
                  title: "Performance & Reliability Focus",
                  desc: "Continuously optimize speed, reduce latency, and ensure systems perform under real-world conditions.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  className="relative flex items-start gap-6"
                >
                  {/* Dot */}
                  <div className="relative z-10 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-900 dark:bg-white"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-28 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">

          {/* Heading */}
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight"
          >
            Engineering Approach
          </motion.h2>

          {/* Intro */}
          <motion.p
            {...fadeUp}
            className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            I design and build systems with a strong focus on clarity, scalability, and long-term reliability —
            ensuring every piece of the product remains efficient, maintainable, and ready to grow.
          </motion.p>

          {/* Principles */}
          <motion.div
            {...fadeUp}
            className="mt-12 grid sm:grid-cols-3 gap-6 text-left"
          >
            {[
              {
                title: "Clean Architecture",
                desc: "Structured, modular codebases that are easy to scale, debug, and extend.",
              },
              {
                title: "Scalable Systems",
                desc: "Built to handle growth — from small users to large-scale production environments.",
              },
              {
                title: "Performance First",
                desc: "Optimized for speed, efficiency, and real-world usage under load.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 
                     bg-white/50 dark:bg-white/5 backdrop-blur-sm"
              >
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

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

    </ >
  );
}











      {/* ================= PROJECTS ================= */}
      {/* <section className="py-24 border-t border-gray-200 dark:border-gray-800">
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
      </section> */}
