import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section
      id="resume"
      className="pt-24 bg-black py-20 px-4 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          Resume
        </h2>

        <p className="text-gray-400 mb-8">
          View or download my full resume with all my experience, skills, and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-3 text-lg font-semibold rounded-full 
                     bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-white shadow-lg transition-transform
                     hover:scale-105 hover:shadow-[0_0_25px_#b76cff] ring-1 ring-[#540c3e] hover:ring-2"
        >
          ↓ Download Resume
        </a>
      </motion.div>
    </section>
  );
}
