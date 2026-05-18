import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import SEOHead from "../components/common/SEOHead";

const API_URL = import.meta.env.VITE_API_URL;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {

  const [seo, setSeo] = useState<any>(null);

  const [homeData, setHomeData] =
    useState<any>(null);

  const [displayed, setDisplayed] =
    useState("");

  const [index, setIndex] =
    useState(0);

  const [isDeleting, setIsDeleting] =
    useState(false);

  // ================= FETCH DATA =================
  useEffect(() => {

    const fetchData = async () => {

      try {

        // SEO
        const seoRes = await axios.get(
          `${API_URL}/api/seo/home`
        );

        if (seoRes.data?.seo) {
          setSeo(seoRes.data.seo);
        }

        // HOME PAGE
        const homeRes = await axios.get(
          `${API_URL}/api/home-page`
        );

        if (homeRes.data?.homePage) {
          setHomeData(
            homeRes.data.homePage
          );
        }

      } catch (err) {

        console.log(
          "Failed to fetch homepage data"
        );

      }
    };

    fetchData();

  }, []);

  // ================= TYPEWRITER =================
  useEffect(() => {

    if (
      !homeData?.hero?.typingTexts
        ?.length
    )
      return;

    const phrases =
      homeData.hero.typingTexts;

    const currentText =
      phrases[index];

    let timeout:
      ReturnType<typeof setTimeout>;

    if (
      !isDeleting &&
      displayed.length <
      currentText.length
    ) {

      timeout = setTimeout(() => {

        setDisplayed(
          currentText.slice(
            0,
            displayed.length + 1
          )
        );

      }, 70);

    } else if (
      isDeleting &&
      displayed.length > 0
    ) {

      timeout = setTimeout(() => {

        setDisplayed(
          currentText.slice(
            0,
            displayed.length - 1
          )
        );

      }, 40);

    } else {

      timeout = setTimeout(() => {

        if (!isDeleting) {

          setIsDeleting(true);

        } else {

          setIsDeleting(false);

          setIndex(
            (prev) =>
              (prev + 1) %
              phrases.length
          );

        }

      }, 1200);

    }

    return () =>
      clearTimeout(timeout);

  }, [
    displayed,
    isDeleting,
    index,
    homeData,
  ]);

  return (
    <>

      {/* ================= SEO ================= */}
      <SEOHead
        title={
          seo?.title ||
          "Dhruvit Soni | Full Stack Developer"
        }

        description={
          seo?.description ||
          "Full Stack Developer building scalable systems, AI applications, APIs, and production-grade web platforms."
        }

        keywords={
          seo?.keywords?.join(", ") ||
          "Dhruvit Soni, Full Stack Developer"
        }

        image={
          seo?.ogImage ||
          "/preview.png"
        }

        url={
          seo?.canonicalUrl ||
          "https://yourdomain.com"
        }

        noIndex={
          seo?.noIndex || false
        }

        noFollow={
          seo?.noFollow || false
        }

        author={
          seo?.author ||
          "Dhruvit Soni"
        }
      />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-black">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px]  rounded-full pointer-events-none" />

        <div className="absolute bottom-[-180px] right-[-120px] w-[420px] h-[420px]  rounded-full pointer-events-none" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{

            backgroundSize: "70px 70px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">

          {/* fade */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="relative z-20 min-w-0">

              {/* SMALL BADGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      border
      border-gray-200
      dark:border-white/10
      bg-white/50
      dark:bg-white/[0.04]
      backdrop-blur-xl
      mb-7
    "
              >

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />

                  <div className="relative w-2.5 h-2.5 rounded-full bg-green-500" />

                </div>

                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Full Stack Developer
                </span>

              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
      text-4xl
      md:text-6xl
      font-black
      leading-[1.02]
      tracking-tight
    "
              >

                {/* STATIC TEXT */}
                <span className="block text-black dark:text-white">

                  {
                    homeData?.hero
                      ?.greeting ||
                    "Hi, I'm"
                  }

                </span>

                {/* GRADIENT NAME */}
                <span
                  className="
        relative
        inline-block
        mt-2
        w-[18ch]
        sm:w-[20ch]
        md:w-[24ch]
      "
                >

                  {/* GLOW */}
                  <span
                    className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-pink-500
          blur-2xl
          opacity-20
        "
                  />

                  {/* TEXT */}
                  <span
                    className="
          relative
          bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-pink-500
          bg-clip-text
          text-transparent
        "
                  >

                    {displayed}

                  </span>

                  {/* CURSOR */}
                  <motion.span
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="
          ml-1
          inline-block
          text-blue-500
        "
                  >
                    |
                  </motion.span>

                </span>

              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                className="
      mt-7
      text-gray-600
      dark:text-gray-400
      text-lg
      max-w-2xl
      leading-relaxed
    "
              >

                {
                  homeData?.hero
                    ?.description
                }

              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                }}
                className="mt-10 flex gap-4 flex-wrap"
              >

                {/* PRIMARY BUTTON */}
                <a
                  href={
                    homeData?.hero
                      ?.primaryButtonLink
                  }
                  className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-black
        dark:bg-white
        text-white
        dark:text-black
        px-7
        py-3.5
        font-medium
        transition-all
        duration-300
        hover:scale-105
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]
      "
                >

                  <span className="relative z-10">
                    {
                      homeData?.hero
                        ?.primaryButtonText
                    }
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
          group-hover:translate-x-[100%]
          transition-transform
          duration-1000
        "
                  />

                </a>

                {/* SECONDARY BUTTON */}
                <a
                  href={
                    homeData?.hero
                      ?.secondaryButtonLink
                  }
                  className="
        border
        border-gray-300
        dark:border-white/10
        bg-white/50
        dark:bg-white/[0.04]
        backdrop-blur-xl
        px-7
        py-3.5
        rounded-2xl
        transition-all
        duration-300
        hover:bg-gray-100
        dark:hover:bg-white/[0.08]
        hover:scale-105
      "
                >

                  {
                    homeData?.hero
                      ?.secondaryButtonText
                  }

                </a>

              </motion.div>

            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
          flex
          justify-center
          relative
          z-10
          ml-0
          md:-ml-20
          lg:-ml-32
        "
            >

              {/* IMAGE GLOW */}
              <div
                className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-500/20
            via-purple-500/10
            to-pink-500/20
            blur-3xl
            scale-110
            rounded-full
          "
              />

              {/* GLASS CARD */}
              <div
                className="
            relative
            rounded-[32px]
            border
            border-white/10
            bg-white/10
            dark:bg-white/[0.04]
            backdrop-blur-2xl
            p-4
            shadow-[0_10px_80px_rgba(0,0,0,0.18)]
          "
              >

                {/* TOP LIGHT */}
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent rounded-full" />

                <motion.img
                  src={
                    homeData?.hero
                      ?.heroImage ||
                    "/dhruvit.png"
                  }
                  alt="Hero"
                  className="
              w-[240px]
              sm:w-[280px]
              md:w-[380px]
              lg:w-[420px]
              object-contain
              opacity-95
              relative
              z-10
            "
                  animate={{
                    y: [0, -15, 0],
                    rotate: [
                      0,
                      2,
                      -2,
                      0,
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* ================= SYSTEMS ================= */}
      <section
        className="
    relative
    py-24
    border-t
    overflow-hidden
  "
      >

        {/* BACKGROUND GLOW */}
        <div
          className="
      absolute
      top-[-120px]
      right-[-120px]
      w-[320px]
      h-[320px]
      rounded-full
      pointer-events-none
    "
        />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
        linear-gradient(to right, gray 1px, transparent 1px),
        linear-gradient(to bottom, gray 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">

          <motion.h2
            {...fadeUp}
            className="
        text-3xl
        md:text-4xl
        font-black
        tracking-tight
        mb-12
      "
          >

            {
              homeData?.systemsSection
                ?.title
            }

          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">

            {
              homeData?.systemsSection
                ?.items?.map(
                  (
                    item: any,
                    i: number
                  ) => (

                    <motion.div
                      key={i}
                      {...fadeUp}
                      whileHover={{
                        y: -8,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/60
                  dark:bg-white/[0.04]
                  backdrop-blur-2xl
                  p-7
                  transition-all
                  duration-500
                  hover:border-blue-500/30
                  hover:shadow-[0_10px_50px_rgba(59,130,246,0.12)]
                "
                    >

                      {/* HOVER GRADIENT */}
                      <div
                        className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-blue-500/[0.08]
                    via-purple-500/[0.04]
                    to-transparent
                  "
                      />

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
                    via-blue-500/50
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                      />

                      {/* CONTENT */}
                      <div className="relative z-10">

                        <h3
                          className="
                      text-xl
                      font-semibold
                      tracking-tight
                    "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                      text-gray-600
                      dark:text-gray-400
                      mt-4
                      text-sm
                      leading-relaxed
                    "
                        >
                          {item.desc}
                        </p>

                      </div>

                    </motion.div>

                  )
                )
            }

          </div>

        </div>

      </section>

      {/* ================= IMPACT ================= */}
      <section
        className="
    relative
    py-28
    border-t
    border-gray-200
    dark:border-white/10
    overflow-hidden
  "
      >

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16">

          {/* TITLE */}
          <motion.h2
            {...fadeUp}
            className="
        text-3xl
        md:text-5xl
        font-black
        mb-20
        tracking-tight
        leading-tight
      "
          >

            {
              homeData?.impactSection
                ?.title
            }

          </motion.h2>

          {/* TIMELINE */}
          <div className="relative">

            {/* LINE */}
            <div
              className="
          absolute
          left-[11px]
          top-0
          bottom-0
          w-px
          bg-gradient-to-b
          from-blue-500/60
          via-purple-500/30
          to-transparent
        "
            />

            <div className="space-y-10">

              {
                homeData?.impactSection
                  ?.items?.map(
                    (
                      item: any,
                      i: number
                    ) => (

                      <motion.div
                        key={i}
                        {...fadeUp}
                        whileHover={{
                          x: 6,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                    group
                    relative
                    flex
                    items-start
                    gap-6
                  "
                      >

                        {/* DOT */}
                        <div className="relative z-10 mt-2">

                          {/* GLOW */}
                          <div
                            className="
                        absolute
                        inset-0
                        rounded-full
                        bg-blue-500
                        blur-md
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                          />

                          {/* DOT */}
                          <div
                            className="
                        relative
                        w-6
                        h-6
                        rounded-full
                        border
                        border-white/20
                        bg-black
                        dark:bg-white
                        flex
                        items-center
                        justify-center
                      "
                          >

                            <div
                              className="
                          w-2
                          h-2
                          rounded-full
                          bg-white
                          dark:bg-black
                        "
                            />

                          </div>

                        </div>

                        {/* CARD */}
                        <div
                          className="
                      flex-1
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-white/60
                      dark:bg-white/[0.04]
                      backdrop-blur-2xl
                      p-6
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

                            <h3
                              className="
                          text-lg
                          md:text-xl
                          font-semibold
                          tracking-tight
                          text-gray-900
                          dark:text-white
                        "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                          text-sm
                          md:text-base
                          text-gray-600
                          dark:text-gray-400
                          mt-3
                          leading-relaxed
                          max-w-2xl
                        "
                            >
                              {item.desc}
                            </p>

                          </div>

                        </div>

                      </motion.div>

                    )
                  )
              }

            </div>

          </div>

        </div>

      </section>

      {/* ================= APPROACH ================= */}
      {/* ================= APPROACH ================= */}
<section
  className="
    relative
    py-28
    border-t
    border-gray-200
    dark:border-white/10
    overflow-hidden
  "
>

  <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center">

    {/* TITLE */}
    <motion.h2
      {...fadeUp}
      className="
        text-3xl
        md:text-5xl
        font-black
        mb-6
        tracking-tight
        leading-tight
      "
    >

      {
        homeData?.approachSection
          ?.title
      }

    </motion.h2>

    {/* DESCRIPTION */}
    <motion.p
      {...fadeUp}
      className="
        text-gray-600
        dark:text-gray-400
        leading-relaxed
        max-w-2xl
        mx-auto
        text-base
        md:text-lg
      "
    >

      {
        homeData?.approachSection
          ?.description
      }

    </motion.p>

    {/* CARDS */}
    <motion.div
      {...fadeUp}
      className="
        mt-14
        grid
        sm:grid-cols-3
        gap-6
        text-left
      "
    >

      {
        homeData?.approachSection
          ?.items?.map(
            (
              item: any,
              i: number
            ) => (

              <motion.div
                key={i}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white/60
                  dark:bg-white/[0.04]
                  backdrop-blur-2xl
                  p-6
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

                {/* CONTENT */}
                <div className="relative z-10">

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-gray-900
                      dark:text-white
                      mb-3
                      tracking-tight
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      md:text-base
                      text-gray-600
                      dark:text-gray-400
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            )
          )
      }

    </motion.div>

  </div>

</section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-t border-gray-200 dark:border-gray-800 text-center">

        <div className="max-w-3xl mx-auto px-6">

          <motion.h2
            {...fadeUp}
            className="text-3xl font-bold"
          >

            {
              homeData?.ctaSection
                ?.title
            }

          </motion.h2>

          <motion.p className="text-gray-600 dark:text-gray-400 mt-4">

            {
              homeData?.ctaSection
                ?.description
            }

          </motion.p>

          <motion.a
            href={
              homeData?.ctaSection
                ?.buttonLink
            }
            className="inline-block mt-8 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >

            {
              homeData?.ctaSection
                ?.buttonText
            }

          </motion.a>

        </div>

      </section>

    </>
  );
}

