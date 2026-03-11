"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";

interface MotionRevealProps {
  children: ReactNode;
  delay?: number;
}

export function MotionReveal({
  children,
  delay = 0,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
