import { motion } from "framer-motion";
import {
  Save,
  User,
  Briefcase,
  Layers3,
  PencilLine,
  Plus,
  Trash2,
} from "lucide-react";

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

export default function AboutSettings() {

  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
      "
    >

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <motion.div
          {...fadeUp}
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            mb-12
          "
        >

          <div>

            <p
              className="
                text-blue-500
                font-medium
                tracking-[0.25em]
                uppercase
                text-sm
                mb-3
              "
            >
              Admin Panel
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                tracking-tight
              "
            >
              About Page Settings
            </h1>

          </div>

          <button
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-2xl
              bg-blue-500
              hover:bg-blue-600
              text-white
              font-medium
              transition-all
              duration-300
              shadow-lg
              shadow-blue-500/20
            "
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>

        </motion.div>

        <div className="space-y-10">

          {/* BASIC INFO */}
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
            "
          >

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

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-8">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <User className="w-6 h-6 text-blue-500" />
                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    Basic Information
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Update your intro section content
                  </p>

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Small Heading
                  </label>

                  <input
                    type="text"
                    placeholder="Who I Am"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/70
                      dark:bg-white/[0.03]
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500/40
                      transition-all
                    "
                  />

                </div>

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Main Title
                  </label>

                  <input
                    type="text"
                    placeholder="About Me"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/70
                      dark:bg-white/[0.03]
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500/40
                      transition-all
                    "
                  />

                </div>

              </div>

              <div className="mt-6">

                <label className="block mb-2 text-sm font-medium">
                  Introduction
                </label>

                <textarea
                  rows={6}
                  placeholder="Write introduction..."
                  className="
                    w-full
                    rounded-[28px]
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white/70
                    dark:bg-white/[0.03]
                    px-5
                    py-4
                    outline-none
                    resize-none
                    focus:border-blue-500/40
                    transition-all
                  "
                />

              </div>

            </div>

          </motion.div>

          {/* CURRENT ROLE */}
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
            "
          >

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

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-8">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Briefcase className="w-6 h-6 text-blue-500" />
                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    Current Role Section
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Manage role content and description
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Section Title
                  </label>

                  <input
                    type="text"
                    placeholder="Current Role"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/70
                      dark:bg-white/[0.03]
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500/40
                      transition-all
                    "
                  />

                </div>

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write role description..."
                    className="
                      w-full
                      rounded-[28px]
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/70
                      dark:bg-white/[0.03]
                      px-5
                      py-4
                      outline-none
                      resize-none
                      focus:border-blue-500/40
                      transition-all
                    "
                  />

                </div>

              </div>

            </div>

          </motion.div>

          {/* TECH STACK */}
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
            "
          >

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

            <div className="relative z-10">

              <div className="flex items-center justify-between gap-4 mb-8">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-blue-500/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Layers3 className="w-6 h-6 text-blue-500" />
                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      Core Technologies
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Add or remove tech stack items
                    </p>

                  </div>

                </div>

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-blue-500/10
                    text-blue-500
                    hover:bg-blue-500/20
                    transition-all
                  "
                >
                  <Plus className="w-4 h-4" />
                  Add Tech
                </button>

              </div>

              <div className="space-y-4">

                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                ].map((tech, i) => (

                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <input
                      type="text"
                      defaultValue={tech}
                      className="
                        flex-1
                        rounded-2xl
                        border
                        border-gray-200
                        dark:border-white/10
                        bg-white/70
                        dark:bg-white/[0.03]
                        px-5
                        py-4
                        outline-none
                        focus:border-blue-500/40
                        transition-all
                      "
                    />

                    <button
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        border
                        border-red-500/20
                        bg-red-500/10
                        text-red-500
                        flex
                        items-center
                        justify-center
                        hover:bg-red-500/20
                        transition-all
                      "
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* HOW I WORK */}
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
            "
          >

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

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-8">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-500/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <PencilLine className="w-6 h-6 text-blue-500" />
                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    How I Work Section
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Update workflow and philosophy content
                  </p>

                </div>

              </div>

              <div className="space-y-6">

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Section Title
                  </label>

                  <input
                    type="text"
                    placeholder="How I Work"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/70
                      dark:bg-white/[0.03]
                      px-5
                      py-4
                      outline-none
                      focus:border-blue-500/40
                      transition-all
                    "
                  />

                </div>

                <div>

                  <label className="block mb-2 text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write work philosophy..."
                    className="
                      w-full
                      rounded-[28px]
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/70
                      dark:bg-white/[0.03]
                      px-5
                      py-4
                      outline-none
                      resize-none
                      focus:border-blue-500/40
                      transition-all
                    "
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}