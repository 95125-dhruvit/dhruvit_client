import { motion } from "framer-motion";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
  },
};

export default function About() {

  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        border-t
        border-gray-200
        dark:border-white/10
      "
    >

      <div className="max-w-5xl mx-auto px-6 md:px-16">

        {/* TITLE */}
        <motion.div
          {...fadeUp}
          className="mb-14"
        >

          <p
            className="
              text-blue-500
              font-medium
              mb-3
              tracking-[0.25em]
              uppercase
              text-sm
            "
          >
            Who I Am
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            About Me
          </h1>

        </motion.div>

        {/* INTRO */}
        <motion.div
          {...fadeUp}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-gray-200
            dark:border-white/10
            bg-white/60
            dark:bg-white/[0.04]
            backdrop-blur-2xl
            p-8
            md:p-10
          "
        >

          {/* TOP LIGHT */}
          <div
            className="
              absolute
              top-0
              left-0
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-blue-500/60
              to-transparent
            "
          />

          <p
            className="
              text-lg
              md:text-xl
              leading-relaxed
              text-gray-700
              dark:text-gray-300
            "
          >
            I’m a Full Stack Developer currently working with a Canada-based company,
            where I contribute to building production-grade web applications used by real users.
            My work involves designing scalable systems, developing APIs, and integrating
            modern technologies to solve practical business problems.
          </p>

        </motion.div>

        {/* CURRENT ROLE */}
        <motion.div
          {...fadeUp}
          whileHover={{
            y: -6,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-gray-200
            dark:border-white/10
            bg-white/60
            dark:bg-white/[0.04]
            backdrop-blur-2xl
            p-8
            md:p-10
            mt-10
            transition-all
            duration-500
            hover:border-blue-500/20
            hover:shadow-[0_10px_50px_rgba(59,130,246,0.08)]
          "
        >

          {/* TOP LIGHT */}
          <div
            className="
              absolute
              top-0
              left-0
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-blue-500/60
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            "
          />

          {/* HOVER BG */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-gradient-to-br
              from-blue-500/[0.05]
              via-purple-500/[0.03]
              to-transparent
            "
          />

          <div className="relative z-10">

            <h2
              className="
                text-2xl
                font-bold
                tracking-tight
                mb-5
              "
            >
              Current Role
            </h2>

            <p
              className="
                text-gray-600
                dark:text-gray-400
                leading-relaxed
                text-base
                md:text-lg
              "
            >
              As a Full Stack Developer, I work across the entire stack — from building
              responsive frontend interfaces in React to designing backend systems using Node.js.
              I regularly handle API integrations, optimize performance, and ensure that
              applications remain reliable and maintainable at scale.
            </p>

          </div>

        </motion.div>

        {/* TECH STACK */}
        <motion.div
          {...fadeUp}
          className="mt-14"
        >

          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              mb-6
            "
          >
            Core Technologies
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "React",
              "TypeScript",
              "Node.js",
              "MongoDB",
              "MySQL",
              "JWT Authentication",
              "Tailwind CSS",
              "REST APIs",
              "VPS Deployment",
              "AI / LLM Integration",
              "OpenClaw Assistant",
            ].map((tech, i) => (

              <motion.span
                key={i}
                whileHover={{
                  y: -4,
                }}
                className="
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/60
                  dark:bg-white/[0.04]
                  backdrop-blur-md
                  text-gray-700
                  dark:text-gray-300
                  transition-all
                  duration-300
                  hover:border-blue-500/20
                  hover:bg-blue-500/[0.04]
                "
              >
                {tech}
              </motion.span>

            ))}

          </div>

        </motion.div>

        {/* HOW I WORK */}
        <motion.div
          {...fadeUp}
          whileHover={{
            y: -6,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-gray-200
            dark:border-white/10
            bg-white/60
            dark:bg-white/[0.04]
            backdrop-blur-2xl
            p-8
            md:p-10
            mt-14
            transition-all
            duration-500
            hover:border-blue-500/20
            hover:shadow-[0_10px_50px_rgba(59,130,246,0.08)]
          "
        >

          {/* TOP LIGHT */}
          <div
            className="
              absolute
              top-0
              left-0
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-blue-500/60
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            "
          />

          {/* HOVER BG */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-gradient-to-br
              from-blue-500/[0.05]
              via-purple-500/[0.03]
              to-transparent
            "
          />

          <div className="relative z-10">

            <h2
              className="
                text-2xl
                font-bold
                tracking-tight
                mb-5
              "
            >
              How I Work
            </h2>

            <p
              className="
                text-gray-600
                dark:text-gray-400
                leading-relaxed
                text-base
                md:text-lg
              "
            >
              I focus on writing clean, maintainable code and building systems that
              scale effectively. My approach emphasizes performance, reliability, and
              long-term maintainability rather than quick fixes. I aim to create
              solutions that are not only functional but also sustainable as products grow.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}