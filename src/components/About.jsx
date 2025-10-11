import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ticking = useRef(false);

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (!ticking.current) {
    ticking.current = true;
    requestAnimationFrame(() => {
      setPos({ x, y });
      ticking.current = false;
    });
  }
};

  return (
    <section
      id="about"
      className="pt-24 min-h-screen flex items-center justify-center bg-[#000000] text-white px-4"
    >
      <motion.div
        className="relative backdrop-blur-xl bg-[#1a1a1a]/70 rounded-2xl border border-[#540c3e]/30 p-8 max-w-3xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        onMouseMove={handleMouseMove}
      >
        {/* Shiny effect layer */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(183,108,255,0.25), transparent 60%)`,
          }}
        />

        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text relative z-10">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed relative z-10">
          I'm Sandeep Arlee, a passionate and dedicated developer currently pursuing my MCA at VIT Bhopal University.
          With a strong foundation in <span className="text-[#b76cff]">Python, Java, and React.js</span>,
          I specialize in crafting scalable, user-centric applications that blend performance with elegant UI design.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4 relative z-10">
          My professional journey includes a year-long role as a <span className="text-[#b76cff]">Python Developer</span> at SS Institution,
          where I developed machine learning solutions like object detection, price prediction, and audio forgery detection.
          This experience sharpened my problem-solving skills and introduced me to real-world AI development.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4 relative z-10">
          I’ve also built full-stack projects such as a <span className="text-[#b76cff]">DDoS Attack Detection System</span> with Flask,
          a <span className="text-[#b76cff]">Real-Time Chat App</span> with Firebase, and several interactive React apps.
          My toolkit spans across the MERN stack, REST APIs, Flask, MongoDB, and cloud services.
        </p>

        <p className="text-gray-300 leading-relaxed mt-4 relative z-10">
          When I’m not building interfaces or writing ML models, I enjoy sketching and listening to music. I'm driven by curiosity and a constant urge to push boundaries — whether in technology or design.
        </p>
      </motion.div>
    </section>
  );
}
