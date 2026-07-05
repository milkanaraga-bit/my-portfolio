"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Mouse-follow gradient glow + small dot. Desktop pointers only. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const glowX = useSpring(x, { stiffness: 60, damping: 20 });
  const glowY = useSpring(y, { stiffness: 60, damping: 20 });
  const dotX = useSpring(x, { stiffness: 700, damping: 45 });
  const dotY = useSpring(y, { stiffness: 700, damping: 45 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[520px] w-[520px] rounded-full opacity-[0.22] blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,#FF5A3C_0%,transparent_65%)]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        className="pointer-events-none fixed left-0 top-0 z-[80] h-2 w-2 rounded-full bg-accent mix-blend-difference"
      />
    </>
  );
}
