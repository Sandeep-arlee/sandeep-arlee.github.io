import { motion } from 'framer-motion';

const projects = [
  {
    title: "AI Voice Assistant",
    iconLabel: "🧠",
    description: "An offline AI-powered voice assistant using Whisper and Ollama with natural language understanding.",
  },
  {
    title: "Cybersecurity Toolkit",
    iconLabel: "🛡️",
    description: "Network diagnostics & DDoS detection system using Flask and Python scripts, built for real-time threat analysis.",
  },
  {
    title: "React Portfolio",
    iconLabel: "🚀",
    description: "This dynamic portfolio was crafted with React and Tailwind CSS to showcase my full-stack projects and creative UI design.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-24 py-20 bg-[#000000] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          Projects
        </h2>
        <p className="text-gray-400 mt-2">A glimpse of what I've built — combining logic, design, and innovation.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-[#1a1a1a] border border-[#540c3e] rounded-xl p-6 shadow-lg transition-all duration-300
                       hover:shadow-[0_0_30px_#b76cff] hover:ring-2 hover:ring-[#b76cff] hover:ring-offset-2 hover:ring-offset-[#1a1a1a]"
          >
            <div className="mb-4 text-3xl">{proj.iconLabel}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#b76cff]">{proj.title}</h3>
            <p className="text-gray-400">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
