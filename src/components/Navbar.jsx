import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll for subtle background glow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#540c3e]/50 shadow-[0_0_15px_#540c3e40]" : "bg-gradient-to-b from-[#1a0017] to-[#000]"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* === Logo === */}
          <a
            href="#hero"
            className="text-2xl font-wakanda tracking-wide text-[#b76cff] hover:drop-shadow-[0_0_10px_#b76cff] transition"
          >
            SANDEEP <span className="text-[#8a2be2]">ARLEE</span>
          </a>

          {/* === Desktop Nav Links === */}
          <div className="hidden md:flex space-x-10 font-bold text-sm tracking-widest">
            <a href="#hero" className="text-gray-200 hover:text-[#b76cff] transition">HOME</a>
            <a href="#projects" className="text-gray-200 hover:text-[#b76cff] transition">PROJECTS</a>
            <a href="#techstack" className="text-gray-200 hover:text-[#b76cff] transition">TECH STACK</a>
            <a href="#contact" className="text-gray-200 hover:text-[#b76cff] transition">CONTACT</a>
          </div>

          {/* === Mobile Menu Button === */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#b76cff] hover:text-white transition focus:outline-none focus:ring-2 focus:ring-[#b76cff]"
            aria-label="Toggle navigation menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* === Mobile Dropdown === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black border-t border-[#540c3e]/50 py-4 text-center"
          >
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-200 hover:text-[#b76cff] transition"
            >
              HOME
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-200 hover:text-[#b76cff] transition"
            >
              PROJECTS
            </a>
            <a
              href="#techstack"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-200 hover:text-[#b76cff] transition"
            >
              TECH STACK
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-200 hover:text-[#b76cff] transition"
            >
              CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
