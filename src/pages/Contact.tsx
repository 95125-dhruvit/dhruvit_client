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

export default function Contact() {

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

      <div className="max-w-3xl mx-auto px-6 md:px-16">

        {/* HEADING */}
        <motion.div
          {...fadeUp}
          className="mb-12"
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
            Get In Touch
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
            Contact
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-gray-600
              dark:text-gray-400
              max-w-2xl
            "
          >
            I’m currently open to full-time opportunities
            where I can contribute to building scalable
            products, modern web platforms, and
            high-performance systems.
          </p>

        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          {...fadeUp}
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

          {/* FORM */}
          <form className="relative z-10 space-y-5">

            {/* NAME */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-medium
                  mb-2
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/70
                  dark:bg-white/[0.03]
                  backdrop-blur-xl
                  px-5
                  py-4
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-500/30
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-medium
                  mb-2
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Email Address
              </label>

              <input
                type="email"
                placeholder="company@example.com"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/70
                  dark:bg-white/[0.03]
                  backdrop-blur-xl
                  px-5
                  py-4
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-500/30
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

            </div>

            {/* COMPANY */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-medium
                  mb-2
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Company
              </label>

              <input
                type="text"
                placeholder="Company Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/70
                  dark:bg-white/[0.03]
                  backdrop-blur-xl
                  px-5
                  py-4
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-blue-500/30
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-medium
                  mb-2
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about the role or opportunity..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/70
                  dark:bg-white/[0.03]
                  backdrop-blur-xl
                  px-5
                  py-4
                  text-gray-900
                  dark:text-white
                  placeholder:text-gray-400
                  dark:placeholder:text-gray-500
                  outline-none
                  transition-all
                  duration-300
                  resize-none
                  focus:border-blue-500/30
                  focus:ring-4
                  focus:ring-blue-500/10
                "
              />

            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                bg-black
                dark:bg-white
                text-white
                dark:text-black
                px-7
                py-4
                font-medium
                transition-all
                duration-300
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              "
            >

              <span className="relative z-10">
                Send Message
              </span>

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-blue-500/0
                  via-white/10
                  to-blue-500/0
                  translate-x-[-100%]
                  hover:translate-x-[100%]
                  transition-transform
                  duration-1000
                "
              />

            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}