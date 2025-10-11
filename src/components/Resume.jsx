import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative min-h-screen bg-black flex items-center justify-center px-4 py-20 text-white overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-wakanda text-4xl leading-snugger pt-headingfix mb-6 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          RESUME
        </h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          View or download my full resume with all my experience, skills, and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full 
                     bg-gradient-to-r from-[#540c3e] via-[#b76cff] to-[#8a2be2] text-white shadow-lg transition-transform
                     hover:scale-105 hover:shadow-[0_0_25px_#b76cff80] ring-1 ring-[#540c3e] hover:ring-2 hover:ring-[#b76cff]
                     focus:outline-none focus:ring-2 focus:ring-[#b76cff]/60"
        >
          ↓ Download Resume
        </a>
      </motion.div>
    </section>
  );
}
