import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black text-white flex items-center justify-center px-6 overflow-x-hidden overflow-y-hidden scroll-mt-24 md:scroll-mt-28 pt-16 md:pt-20"
      aria-label="Hero"
    >
      {/* ambient depth orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#8a2be2]/18 blur-3xl"
        animate={reduce ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#4ef2ff]/12 blur-3xl"
        animate={reduce ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* two-column layout */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1.05fr_0.02fr_1fr] gap-10 md:gap-16 items-center mx-auto px-2 md:px-4">
        {/* LEFT: intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7 }}
          className="text-center md:text-left"
        >
          <div className="inline-block">
            <h1 className="font-wakanda tracking-[0.05em] text-5xl md:text-7xl leading-[1.1] md:leading-[1.15] bg-gradient-to-r from-white via-[#e5d8ff] to-white bg-clip-text text-transparent">
              SANDEEP ARLEE
            </h1>
            <span className="block h-[3px] w-full mt-2 bg-gradient-to-r from-[#540c3e] via-[#b76cff] to-[#4ef2ff] rounded-full" />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-1 mt-3">
            <TypeAnimation
              sequence={[
                "AI Engineer", 2000,
                "Cybersecurity Enthusiast", 2000,
                "Full-Stack Developer", 2000,
                "React Pro & Python Dev", 2000,
              ]}
              wrapper="span"
              speed={50}
              className="block text-lg md:text-2xl text-[#b76cff]"
              repeat={Infinity}
              cursor={false}
            />
            <span className="inline-block w-[2px] h-[1.3em] bg-[#b76cff] animate-pulse" />
          </div>

          <p className="mt-5 text-gray-300 md:max-w-md md:pr-6 mx-auto md:mx-0 leading-[1.9]">
  I build robust, high-quality software solutions emphasizing scalability, security, and user-centric design.
</p>

        </motion.div>

        {/* divider */}
        <div className="hidden md:block h-64 justify-self-center w-px bg-gradient-to-b from-[#b76cff]/40 via-[#8a2be2]/40 to-transparent rounded-full" />

        {/* RIGHT: about text */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduce ? 0 : 0.8 }}
          className="relative normal-case"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#540c3e] via-[#8a2be2] to-[#4ef2ff] bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="text-gray-300 leading-[1.9] md:leading-8">
            <p>
              I’m pursuing MCA at <span className="text-[#b76cff]">VIT Bhopal</span>, with a strong base in
              <span className="text-[#b76cff]"> Python</span>, <span className="text-[#b76cff]">Java</span>, and
              <span className="text-[#b76cff]"> React.js</span>. I focus on user-centric apps with clean UI and solid performance.
            </p>
            <p className="mt-4">
              Worked as a <span className="text-[#b76cff]">Python Developer</span> at SS Institution — shipped ML projects like
              object detection, price prediction, and audio forgery detection.
            </p>
            <p className="mt-4">
              Built a <span className="text-[#b76cff]">DDoS Detection System</span> (Flask), a <span className="text-[#b76cff]">Realtime Chat App</span> (Firebase),
              and several React apps. Comfortable with MERN, REST APIs, Flask, and MongoDB.
            </p>
            <p className="mt-4">
              Beyond code, I sketch and enjoy music — always exploring and pushing boundaries in tech and design.
            </p>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#b76cff]/80"
        animate={reduce ? {} : { y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-xs tracking-widest uppercase font-medium">Scroll</div>
        <div className="mx-auto mt-1 h-5 w-px bg-[#b76cff]/70" />
      </motion.div>
    </section>
  );
}
