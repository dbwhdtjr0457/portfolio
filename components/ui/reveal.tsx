"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className, delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || !element.animate || !window.IntersectionObserver || preference.matches) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      if (preference.matches || element.contains(document.activeElement)) return;
      animation = element.animate([
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], { duration: 480, delay: Math.min(delay * 1000, 120), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
    }, { threshold: 0.08 });
    const cancel = () => animation?.cancel();
    preference.addEventListener("change", cancel);
    element.addEventListener("focusin", cancel);
    observer.observe(element);
    return () => {
      observer.disconnect(); cancel();
      preference.removeEventListener("change", cancel);
      element.removeEventListener("focusin", cancel);
    };
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
