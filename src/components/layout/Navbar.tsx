import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // ✅ NEW: scroll behavior
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // ================= THEME =================
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // ================= SCROLL BEHAVIOR =================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 shadow-sm"
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 py-4">

          {/* LOGO */}
          <h1 className="text-xl font-bold text-black dark:text-white">
            Dhruvit
          </h1>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black dark:text-white font-semibold"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-4 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* HAMBURGER */}
          {!isOpen && (
            <div
              className="md:hidden cursor-pointer z-[60]"
              onClick={() => setIsOpen(true)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: 0, y: 0 }}
                  className="block h-[2px] w-full bg-black dark:bg-white"
                />
                <motion.span className="block h-[2px] w-full bg-black dark:bg-white" />
                <motion.span
                  animate={{ rotate: 0, y: 0 }}
                  className="block h-[2px] w-full bg-black dark:bg-white"
                />
              </div>
            </div>
          )}

        </div>
      </motion.nav>

      {/* ================= BACKDROP ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* ================= CROSS ================= */}
      {isOpen && (
        <div
          className="fixed top-5 right-6 z-[100] md:hidden cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={{ rotate: 45, y: 8 }}
              className="block h-[2px] w-full bg-black dark:bg-white"
            />
            <motion.span
              animate={{ opacity: 0 }}
              className="block h-[2px] w-full bg-black dark:bg-white"
            />
            <motion.span
              animate={{ rotate: -45, y: -8 }}
              className="block h-[2px] w-full bg-black dark:bg-white"
            />
          </div>
        </div>
      )}

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-screen bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 flex flex-col px-6 pt-24 gap-6 z-50"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-black dark:text-white font-semibold text-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition text-lg"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-6 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Toggle Theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
















// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Experience", path: "/experience" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="flex justify-between items-center px-6 md:px-16 py-4 border-b border-gray-800 relative">

//       {/* LOGO */}
//       <h1 className="text-xl font-bold">Dhruvit</h1>

//       {/* DESKTOP MENU */}
//       <div className="hidden md:flex gap-6">
//         {links.map((link) => (
//           <Link
//             key={link.name}
//             to={link.path}
//             className="text-gray-400 hover:text-white transition"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>

//       {/* HAMBURGER */}
//       <div
//         className="md:hidden cursor-pointer z-50"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="w-6 h-5 flex flex-col justify-between">
//           <motion.span
//             animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//             className="block h-[2px] w-full bg-white origin-center"
//           />
//           <motion.span
//             animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
//             className="block h-[2px] w-full bg-white"
//           />
//           <motion.span
//             animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//             className="block h-[2px] w-full bg-white origin-center"
//           />
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 right-0 w-2/3 h-screen bg-black border-l border-gray-800 flex flex-col items-start px-6 pt-20 gap-6 z-40"
//           >
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="text-lg text-gray-300 hover:text-white transition"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </nav>
//   );
// }