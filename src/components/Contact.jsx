import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
  ContactShadows,
  Center,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";

function BlackPantherModel() {
  const group = useRef();
  const { scene, animations } = useGLTF("/blackpanther.glb");
  const { actions } = useAnimations(animations, group);
  const hasAnims = useMemo(() => animations?.length > 0, [animations]);

  // Safety: avoid invisible parts due to alpha/culling
  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh && o.material) {
        const m = o.material;
        if ("transparent" in m) m.transparent = false;
        if ("opacity" in m && m.opacity < 1) m.opacity = 1;
        if ("alphaTest" in m) m.alphaTest = 0;
        if ("side" in m) m.side = THREE.DoubleSide;
        if ("depthWrite" in m) m.depthWrite = true;
        if ("depthTest" in m) m.depthTest = true;
        o.castShadow = o.receiveShadow = true;
      }
    });
  }, [scene]);

  // Play first animation if present
  useEffect(() => {
    if (hasAnims && actions) {
      const first = Object.keys(actions)[0];
      if (first) actions[first].reset().play();
    }
  }, [actions, hasAnims]);

  // Fallback idle spin when no animations
  useFrame((_, d) => {
    if (!hasAnims && group.current) group.current.rotation.y += 0.2 * d;
  });

  // Nudge up a bit
  return (
    <group ref={group} position={[0, -0.6, 0]} scale={2.6}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-24 py-24 px-4 bg-[#000] text-white flex flex-col md:flex-row items-center justify-center gap-16"
    >
      {/* Left: text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          Interested in working together or have a cool idea to discuss? Let’s
          connect and make it real.
        </p>

        <a
          href="mailto:sandeeparlee@gmail.com"
          className="inline-block px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105
                     bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-white shadow-lg
                     hover:shadow-[0_0_25px_#b76cff] ring-1 ring-[#540c3e] hover:ring-2"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Right: 3D with radial grey→black background */}
      <div className="w-full md:w-[720px] h-[560px] relative rounded-2xl overflow-hidden">
        {/* Radial background */}
        <div className="absolute inset-0 pointer-events-none
                        bg-[radial-gradient(circle_at_center,rgba(140,140,140,0.28)_0%,rgba(0,0,0,1)_72%)]" />

        <Canvas
          className="relative z-10"
          shadows
          camera={{ position: [0, 2.2, 9], fov: 45, near: 0.01, far: 200 }}
          gl={{ antialias: true }}
        >
          <hemisphereLight intensity={0.8} groundColor={"#222"} />
          <directionalLight
            position={[7, 10, 7]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <Environment preset="studio" intensity={0.9} />
          <BlackPantherModel />
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.3}
            blur={2.5}
            far={12}
          />
          <OrbitControls
            enableZoom={false}
            target={[0, 0.8, 0]}
            maxPolarAngle={Math.PI * 0.95}
            minPolarAngle={Math.PI * 0.1}
          />
        </Canvas>

        {/* Minimal attribution (bottom-right over the canvas) */}
        <div className="absolute bottom-2 right-2 z-20 text-[10px] text-gray-400 opacity-70">
          <a
            href="https://skfb.ly/pyHMF"
            target="_blank"
            rel="noopener noreferrer"
            title='“Black Panther - Marvel Rivals” by WW3 — CC BY 4.0'
            className="hover:underline"
          >
            Black Panther – WW3 (CC BY 4.0)
          </a>
        </div>
      </div>
    </section>
  );
}
