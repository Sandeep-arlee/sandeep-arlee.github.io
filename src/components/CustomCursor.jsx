import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const ROOT_ID = "custom-cursor-root";

export default function CustomCursor() {
  const dotRef = useRef(null);     // small dot
  const glowRef = useRef(null);    // tight halo
  const bgRef = useRef(null);      // BIG page-wide glow (continuous)
  const pulseRef = useRef(null);   // click ripple

  const target = useRef({ x: -9999, y: -9999 });
  const pos = useRef({ x: -9999, y: -9999 });   // follower (lerped)
  const raf = useRef(0);
  const idleTimer = useRef(null);
  const started = useRef(false);

  const [rootEl, setRootEl] = useState(null);

  // Create portal root once (StrictMode-safe)
  useEffect(() => {
    if (typeof document === "undefined") return;
    let root = document.getElementById(ROOT_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = ROOT_ID;
      document.body.appendChild(root);
    }
    setRootEl(root);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!rootEl) return;

    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    const smallScreen =
      window.matchMedia && window.matchMedia("(max-width: 768px)").matches;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hide on touch/small screens
    if (isTouch || smallScreen) {
      rootEl.style.display = "none";
      return () => { rootEl.style.display = ""; };
    } else {
      rootEl.style.display = "";
    }

    const dot = dotRef.current;
    const glow = glowRef.current;
    const bg = bgRef.current;
    const pulse = pulseRef.current;
    if (!dot || !glow || !bg || !pulse) return;

    const setOpacity = (v) => {
      const val = String(v);
      dot.style.opacity = val;
      glow.style.opacity = val;
      bg.style.opacity = v ? "0.9" : "0"; // background stays softer
    };

    const startLoop = () => {
      if (started.current) return;
      started.current = true;
      const loop = () => {
        raf.current = requestAnimationFrame(loop);

        // ease follower toward target for both glow layers
        const dx = target.current.x - pos.current.x;
        const dy = target.current.y - pos.current.y;
        pos.current.x += dx * 0.18;
        pos.current.y += dy * 0.18;

        // move the tight halo
        glow.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;

        // move the LARGE page-wide glow (continuous)
        bg.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      };
      raf.current = requestAnimationFrame(loop);
    };

    // Native events → no SyntheticEvent pooling issues
    let ticking = false;
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          target.current = { x, y };

          // dot snaps to pointer (no interpolation)
          dot.style.transform =
            `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

          setOpacity(1);
          startLoop();

          clearTimeout(idleTimer.current);
          idleTimer.current = setTimeout(() => setOpacity(0), 1200);
          ticking = false;
        });
      }
    };

    const onLeave = () => setOpacity(0);

    const onClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      pulse.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      pulse.classList.remove("pulse-effect");
      // restart animation
      // eslint-disable-next-line no-unused-expressions
      pulse.offsetWidth;
      if (!prefersReduced) pulse.classList.add("pulse-effect");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click", onClick);

    // hidden until first move
    setOpacity(0);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(idleTimer.current);
      started.current = false;
    };
  }, [rootEl]);

  if (!rootEl) return null;

  return ReactDOM.createPortal(
    <>
      <style>{`
        .cc-root {
          position: fixed; inset: 0; pointer-events: none; z-index: 40;
        }
        .cc-dot, .cc-glow, .cc-bg, .cc-pulse {
          position: fixed; top: 0; left: 0; pointer-events: none;
          will-change: transform, opacity, filter;
        }

        /* Small dot */
        .cc-dot {
          width: 8px; height: 8px; border-radius: 9999px;
          background: #b76cff;
          transform: translate3d(-9999px, -9999px, 0) translate(-50%, -50%);
          transition: opacity 180ms ease;
          opacity: 0;
          box-shadow: 0 0 10px 2px rgba(183,108,255,0.5);
          mix-blend-mode: screen;
        }

        /* Tight halo (follows with ease) */
        .cc-glow {
          width: 220px; height: 220px; border-radius: 9999px;
          background: radial-gradient(110px circle,
            rgba(183,108,255,0.22),
            rgba(183,108,255,0.07) 60%,
            transparent 70%);
          filter: blur(10px) saturate(1.05);
          transform: translate3d(-9999px, -9999px, 0) translate(-50%, -50%);
          transition: opacity 220ms ease;
          opacity: 0;
          mix-blend-mode: screen;
        }

        /* BIG page-wide glow (continuous across sections, artifact-free) */
        .cc-bg {
          width: 800px;
          height: 800px;
          border-radius: 9999px;
          background: radial-gradient(380px circle,
            rgba(183,108,255,0.10),
            rgba(183,108,255,0.05) 55%,
            transparent 75%);
          filter: blur(16px);
          transform: translate3d(-9999px, -9999px, 0) translate(-50%, -50%);
          transition: opacity 240ms ease;
          opacity: 0;
          backface-visibility: hidden;
          transform-style: preserve-3d;
          will-change: transform, opacity, filter;
          contain: paint;
        }


        /* Click ripple */
        .cc-pulse {
          width: 12px; height: 12px; border-radius: 9999px;
          background: rgba(183,108,255,0.55);
          transform: translate3d(-9999px, -9999px, 0) translate(-50%, -50%);
          opacity: 0;
          mix-blend-mode: screen;
        }
        @keyframes cc-pulse-kf {
          0%   { opacity: .45; transform: translate(-50%, -50%) scale(1); }
          60%  { opacity: .22; transform: translate(-50%, -50%) scale(10); box-shadow: 0 0 20px 6px rgba(183,108,255,0.2); }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(14); box-shadow: 0 0 0 0 rgba(183,108,255,0); }
        }
        .pulse-effect { animation: cc-pulse-kf 650ms ease-out forwards; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .pulse-effect { animation: none; opacity: 0; }
          .cc-glow, .cc-dot, .cc-bg { transition: none; }
        }
      `}</style>

      <div className="cc-root">
        {/* Large continuous glow first so it sits beneath */}
        <div ref={bgRef} className="cc-bg" />
        <div ref={glowRef} className="cc-glow" />
        <div ref={dotRef} className="cc-dot" />
        <div ref={pulseRef} className="cc-pulse" />
      </div>
    </>,
    rootEl
  );
}
