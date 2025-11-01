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
    title: "Project Mentor Hub",
    iconLabel: "🛍️",
    description:
      "Developed a platform for academic projects with secure payments, Firebase integration, and a seamless React-based user experience.",
    link: "https://projectmentorhub.github.io",
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
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-x-hidden"
    >
      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-wakanda text-4xl leading-snugger pt-headingfix bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
            PROJECTS
          </h2>
          <p className="text-gray-400 mt-2 leading-relaxed">
            A glimpse of what I've built — combining logic, design, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {projects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link || "#"}
              target={proj.link && proj.link !== "#" ? "_blank" : "_self"}
              rel={proj.link && proj.link !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
              className="w-full max-w-sm min-h-[220px] bg-[#1a1a1a] border border-[#540c3e]/80 rounded-xl shadow-lg
                         hover:shadow-[0_0_30px_#b76cff80] hover:ring-2 hover:ring-[#b76cff] hover:ring-offset-2 hover:ring-offset-[#1a1a1a]
                         transition-all duration-300 p-6 flex flex-col focus:outline-none focus:ring-2 focus:ring-[#b76cff]/60"
            >
              <div className="text-4xl mb-3">{proj.iconLabel}</div>
              <h3 className="font-wakanda text-xl leading-snugger pt-headingfix text-[#b76cff]">
                {proj.title}
              </h3>
              <p className="text-gray-400 mt-2 leading-relaxed">{proj.description}</p>

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
