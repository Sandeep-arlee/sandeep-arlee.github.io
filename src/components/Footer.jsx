export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-[#3b122e] py-8 px-4 text-gray-400 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Sandeep-arlee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
        >
          Github
        </a>
        <a
          href="https://in.linkedin.com/in/sandeep-arlee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/in/Sandeep-arlee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8a2be2] transition duration-300 hover:drop-shadow-[0_0_8px_#8a2be2]"
        >
          Twitter
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Sandeep Arlee. All rights reserved.
      </p>
    </footer>
  );
}
