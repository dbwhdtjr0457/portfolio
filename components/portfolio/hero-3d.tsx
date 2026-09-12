"use client";

import { useRef, useSyncExternalStore, type PointerEvent } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const query = "(prefers-reduced-motion: no-preference)";
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const snapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;

export function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 120, damping: 22 });
  const rotateY = useSpring(pointerX, { stiffness: 120, damping: 22 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const unfold = useTransform(scrollYProgress, [0, .85], [12, 0]);
  const turn = useTransform(scrollYProgress, [0, .85], [-14, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -55]);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!enabled || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 15);
    pointerY.set(-((event.clientY - bounds.top) / bounds.height - .5) * 11);
  }

  function reset() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return <div ref={ref} className="hero-stage" onPointerMove={move} onPointerLeave={reset}>
    <motion.div className="hero-scene" style={enabled ? { rotateX: unfold, rotateY: turn, y: lift } : {}}>
      <motion.div className="hero-stack" style={enabled ? { rotateX, rotateY } : {}}>
        <div className="identity-object">
          <div className="identity-object-top"><span>PORTFOLIO · 2026</span><span>FRONTEND DEVELOPER</span></div>
          <div className="identity-name" aria-hidden="true"><span>유</span><span>종</span><span>석</span></div>
          <div className="identity-object-bottom"><span>WEB · REALTIME</span><i aria-hidden="true" /><span>3D · MOBILE</span></div>
        </div>
      </motion.div>
    </motion.div>
  </div>;
}
