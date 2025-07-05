import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const tailRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      tailRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const click = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  pulseRef.current.style.left = `${x}px`;
  pulseRef.current.style.top = `${y}px`;

  // Restart animation
  pulseRef.current.classList.remove('pulse-effect');
  void pulseRef.current.offsetWidth;
  pulseRef.current.classList.add('pulse-effect');
};

    document.addEventListener('mousemove', move);
    document.addEventListener('click', click);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('click', click);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={tailRef}
        className="absolute w-10 h-10 rounded-full bg-[#8a2be2]/30 blur-2xl transition-transform duration-300"
      />
      <div
        ref={dotRef}
        className="absolute w-3 h-3 rounded-full bg-[#b76cff] transition-transform duration-75"
      />
      <div
        ref={pulseRef}
        className="absolute w-12 h-12 bg-[#b76cff]/50 rounded-full animate-none -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>,
    document.body
  );
}
