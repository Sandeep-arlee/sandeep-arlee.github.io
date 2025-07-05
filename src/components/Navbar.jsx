
export default function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#3b122e] to-black backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <a href="#hero" className="font-bold text-2xl text-[#8a2be2] drop-shadow-[0_0_8px_#8a2be2]">
          Sandeep Arlee
        </a>
        <ul className="flex space-x-8 text-base font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#techstack"
              className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
