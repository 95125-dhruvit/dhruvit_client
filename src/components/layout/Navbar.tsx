import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }

    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setDarkMode((currentTheme) => !currentTheme);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/70 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-black/70"
      >
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 lg:px-16">
          <h1 className="text-xl font-bold text-black dark:text-white">Soni Dhruvit</h1>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-black dark:text-white"
                    : "text-gray-600 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-4 rounded-lg border border-gray-300 px-3 py-1 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-gray-300 px-3 py-1 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {!isOpen && (
              <button
                className="cursor-pointer z-[60]"
                onClick={() => setIsOpen(true)}
                type="button"
              >
                <div className="flex h-5 w-6 flex-col justify-between">
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
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
          />
        )}
      </AnimatePresence>

      {isOpen && (
        <div className="fixed top-5 right-6 z-[100] flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-gray-300 px-3 py-1 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
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
          </button>
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 flex h-screen w-[75%] flex-col gap-6 border-l border-gray-200 bg-white px-6 pt-24 dark:border-gray-800 dark:bg-black sm:w-[60%]"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-semibold text-black dark:text-white"
                    : "text-lg text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
