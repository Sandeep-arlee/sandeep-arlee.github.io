import { motion } from "framer-motion";

const techs = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Node.js", icon: "/icons/node.svg" },
  { name: "MongoDB", icon: "/icons/mongo.svg" },
  { name: "JavaScript", icon: "/icons/js.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="relative min-h-screen bg-black py-20 px-4 text-center text-white overflow-x-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-12"
      >
        <h2 className="font-wakanda text-4xl leading-snugger pt-headingfix bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          TECH STACK
        </h2>
        <p className="text-gray-400 mt-2 leading-relaxed">
          Technologies I frequently work with
        </p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
        {techs.map((tech) => (
          <motion.button
            key={tech.name}
            type="button"
            whileHover={{ scale: 1.06 }}
            whileFocus={{ scale: 1.03 }}
            className="flex flex-col items-center justify-center border border-[#540c3e]/80 p-4 rounded-xl bg-[#1a1a1a]
                       hover:shadow-[0_0_20px_#b76cff80] transition-all duration-300 focus:outline-none
                       focus:ring-2 focus:ring-[#b76cff]/60"
            aria-label={tech.name}
          >
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="w-12 h-12 mb-2"
              loading="lazy"
              decoding="async"
            />
            <p className="font-wakanda text-sm leading-snugger pt-headingfix text-[#b76cff]">
              {tech.name}
            </p>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
