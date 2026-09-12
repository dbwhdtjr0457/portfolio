"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const query = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const snapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;

export function ScrollScene({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const scale = useTransform(scrollYProgress, [0, .5, 1], [.98, 1, 1]);
  return <div ref={ref} className={className}>
    <motion.div className="scroll-scene" style={enabled ? { y, scale } : {}}>{children}</motion.div>
  </div>;
}
