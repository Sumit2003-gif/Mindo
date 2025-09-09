import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GetInTouch from "./GetInTouch";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
    setIsMobileMenuOpen(false); // Close menu if modal opened from mobile
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md text-black" : "bg-black/10 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://demo8.eightheme.com/mindo/wp-content/uploads/sites/10/2025/03/Mindo-Dark.png"
              alt="Logo"
              className={`h-10 transition-all duration-300 ${
                scrolled ? "brightness-0" : ""
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition duration-300 relative group ${
                  location.pathname === item.path
                    ? "text-yellow-400"
                    : scrolled
                    ? "text-black hover:text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleModal}
              className="bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-full transition duration-300 shadow-md"
            >
              Get A Quotation
            </motion.button>
          </div>

          {/* Hamburger (Mobile) */}
          <div
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          >
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-black" : "bg-white"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-40 md:hidden"
              >
                <div className="flex flex-col items-start p-6 space-y-6">
                  {menu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        location.pathname === item.path
                          ? "text-yellow-500"
                          : "text-black hover:text-yellow-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <button
                    onClick={toggleModal}
                    className="mt-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-full transition duration-300 w-full"
                  >
                    Get A Quotation
                  </button>
                </div>
              </motion.div>

              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                onClick={toggleMobileMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Modal for Get In Touch Form */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-lg shadow-2xl z-50 p-6 md:p-10"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={toggleModal}
                  className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>

              {/* GetInTouch form */}
              <GetInTouch closeModal={toggleModal} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
