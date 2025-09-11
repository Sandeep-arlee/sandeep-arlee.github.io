import { motion } from "framer-motion";

const projects = [
  {
    title: "GrivaHealth.com",
    iconLabel: "🌐",
    description:
      "Official website of Griva Healthcare — showcasing AI-powered medical devices and healthcare innovations.",
    link: "https://grivahealth.com",
  },
  {
    title: "Cybersecurity Toolkit",
    iconLabel: "🛡️",
    description:
      "Network diagnostics & DDoS detection system using Flask and Python scripts, built for real-time threat analysis.",
    link: "https://github.com/Sandeep-arlee/DDOS-attack-prediction-", 
  },
  {
    title: "React Portfolio",
    iconLabel: "🚀",
    description:
      "This dynamic portfolio was crafted with React and Tailwind CSS to showcase my full-stack projects and creative UI design.",
    link: "#",
  },
  {
    title: "SSInstitution.com",
    iconLabel: "🏫",
    description:
      "Website for SS Institution — a modern, responsive platform highlighting academic programs and institutional initiatives.",
    link: "https://ssinstitution.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
            Projects
          </h2>
          <p className="text-gray-400 mt-2">A glimpse of what I've built — combining logic, design, and innovation.</p>
        </motion.div>

        {/* 2x2 grid, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {projects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link || "#"}
              target={proj.link && proj.link !== "#" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
              className="w-full max-w-sm min-h-[220px] bg-[#1a1a1a] border border-[#540c3e] rounded-xl shadow-lg
                         hover:shadow-[0_0_30px_#b76cff] hover:ring-2 hover:ring-[#b76cff] hover:ring-offset-2 hover:ring-offset-[#1a1a1a]
                         transition-all duration-300 p-6 flex flex-col"
            >
              <div className="text-4xl mb-3">{proj.iconLabel}</div>
              <h3 className="text-xl font-semibold text-[#b76cff]">{proj.title}</h3>
              <p className="text-gray-400 mt-2">{proj.description}</p>

              {proj.link && (
                <span className="mt-auto text-sm text-gray-400 underline/50 underline-offset-4">
                  {proj.link.startsWith("http") ? "Open link" : "View"}
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
