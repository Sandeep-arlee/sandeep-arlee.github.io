export default function Footer() {
  return (
    <footer className="bg-[#000000] py-8 px-4 text-gray-400 text-center border-t border-[#540c3e]">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
        >
          Twitter
        </a>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nidun Jacob. All rights reserved.
      </p>
    </footer>
  );
}
