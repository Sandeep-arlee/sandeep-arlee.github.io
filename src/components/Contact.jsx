import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 py-24 px-4 bg-[#000000] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          Interested in working together or have a cool idea to discuss? Let’s connect and make it real.
        </p>

        <a
          href="mailto:sandeeparlee@gmail.com"
          className="inline-block px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105
                     bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-white shadow-lg
                     hover:shadow-[0_0_25px_#b76cff] ring-1 ring-[#540c3e] hover:ring-2"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
