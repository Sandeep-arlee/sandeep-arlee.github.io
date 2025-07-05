import { motion } from 'framer-motion';

export default function GitHubStats() {
  return (
    <section className="pt-24 bg-black text-white py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          GitHub Stats
        </h2>
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=sandeep-arlee&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="rounded-lg shadow-lg w-full max-w-xl"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=sandeep-arlee&theme=radical"
            alt="GitHub Streak"
            className="rounded-lg shadow-lg w-full max-w-xl"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=sandeep-arlee&layout=compact&theme=radical"
            alt="Top Languages"
            className="rounded-lg shadow-lg w-full max-w-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
