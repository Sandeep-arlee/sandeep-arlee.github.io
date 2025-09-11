import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
<section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 pt-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
       <h1 className="font-wakanda text-5xl md:text-7xl text-white leading-tight tracking-wide px-4 py-2 overflow-visible">
          Sandeep Arlee
        </h1>
        <TypeAnimation
          sequence={[
            'AI Engineer', 1500,
            'Cybersecurity Enthusiast', 1500,
            'Full-Stack Developer', 1500,
            'React Pro & Python Dev', 1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-lg md:text-2xl text-gray-400"
          repeat={Infinity}
        />

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          I'm a tech enthusiast with a passion for cutting-edge web development, AI and ethical hacking. This portfolio showcases the blend of creativity and engineering behind my work.
        </p>
      </motion.div>
    </section>
  );
}
