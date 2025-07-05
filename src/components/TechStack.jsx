import { motion } from 'framer-motion';

const techs = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
  { name: 'Node.js', icon: '/icons/node.svg' },
  { name: 'MongoDB', icon: '/icons/mongo.svg' },
  { name: 'JavaScript', icon: '/icons/js.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'C++', icon: '/icons/cpp.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
];

export default function TechStack() {
  return (
    <section id = "techstack"className="pt-24 bg-black py-20 px-4 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          Tech Stack
        </h2>
        <p className="text-gray-400 mt-2">Technologies I frequently work with</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {techs.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center border border-[#540c3e] p-4 rounded-xl bg-[#1a1a1a]
                      hover:shadow-[0_0_20px_#b76cff] transition-all duration-300"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
            <p className="text-sm text-[#b76cff]">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
