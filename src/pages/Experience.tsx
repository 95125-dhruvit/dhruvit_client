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

export default function Experience() {

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

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">

        {/* HEADING */}
        <motion.div
          {...fadeUp}
          className="mb-16"
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
            Career Journey
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
            Experience
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-gray-600
              dark:text-gray-400
            "
          >
            Building scalable full-stack applications,
            advanced frontend experiences, and
            high-performance backend systems for
            modern products used by real users.
          </p>

        </motion.div>

        {/* EXPERIENCE CARD */}
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

          <div className="relative z-10 p-8 md:p-10">

            {/* HEADER */}
            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-5
              "
            >

              <div>

                <h2 className="text-3xl font-bold">
                  Full Stack Developer
                </h2>

                <p
                  className="
                    mt-2
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Canada-based Company • Present
                </p>

              </div>

              <div
                className="
                  w-fit
                  px-4
                  py-2
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  text-blue-500
                  text-sm
                  font-medium
                  backdrop-blur-md
                "
              >
                Remote
              </div>

            </div>

            {/* DIVIDER */}
            <div
              className="
                my-8
                h-px
                bg-gradient-to-r
                from-transparent
                via-gray-300
                dark:via-white/10
                to-transparent
              "
            />

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3 mb-8">

              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Three.js",
                "Tailwind",
                "REST APIs",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white/50
                    dark:bg-white/[0.04]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-blue-500/20
                    hover:bg-blue-500/[0.04]
                  "
                >
                  {item}
                </span>

              ))}

            </div>

            {/* POINTS */}
            <ul className="space-y-5">

              {[
                "Develop and maintain production-level React applications",
                "Build scalable backend APIs using Node.js and Express",
                "Integrate payment systems and third-party APIs",
                "Optimize performance, SEO, and accessibility",
                "Work on systems actively used by real customers",
              ].map((point, i) => (

                <motion.li
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  className="flex items-start gap-4"
                >

                  <div
                    className="
                      mt-2
                      w-2
                      h-2
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_18px_#3b82f6]
                    "
                  />

                  <span
                    className="
                      leading-relaxed
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    {point}
                  </span>

                </motion.li>

              ))}

            </ul>

          </div>

        </motion.div>

      </div>

    </section>
  );
}