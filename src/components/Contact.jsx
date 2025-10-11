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

  // fix transparency/culling
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

  // play first animation or spin
  useEffect(() => {
    if (hasAnims && actions) {
      const first = Object.keys(actions)[0];
      if (first) actions[first].reset().play();
    }
  }, [actions, hasAnims]);

  useFrame((_, d) => {
    if (!hasAnims && group.current) group.current.rotation.y += 0.2 * d;
  });

  return (
    <group ref={group} position={[0, -0.1, 0]} scale={2.6}>
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
      className="relative min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center gap-16 px-4 py-24 overflow-x-hidden"
    >
      {/* LEFT: Text block */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl text-center md:text-left"
      >
        <h2 className="font-wakanda text-4xl leading-snugger pt-headingfix mb-6 bg-gradient-to-r from-[#540c3e] to-[#8a2be2] text-transparent bg-clip-text">
          GET IN TOUCH
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Interested in working together or have a cool idea to discuss? Let’s
          connect and make it real.
        </p>

        <a
          href="mailto:sandeeparlee@gmail.com"
          className="inline-block px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105
                     bg-gradient-to-r from-[#540c3e] via-[#b76cff] to-[#8a2be2] text-white shadow-lg
                     hover:shadow-[0_0_25px_#b76cff80] ring-1 ring-[#540c3e] hover:ring-2 hover:ring-[#b76cff]
                     focus:outline-none focus:ring-2 focus:ring-[#b76cff]/60"
        >
          ✉ Contact Me
        </a>
      </motion.div>

      {/* RIGHT: 3D Model */}
      <div className="relative w-full md:w-[720px] h-[560px] rounded-2xl overflow-hidden">
        {/* soft vignette inside the card only (not section-wide) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(140,140,140,0.22)_0%,rgba(0,0,0,1)_70%)]" />

        <Canvas
          className="relative z-10"
          shadows
          camera={{ position: [0, 1.3, 7], fov: 45 }}
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

        {/* Attribution */}
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
