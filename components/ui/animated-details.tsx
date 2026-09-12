"use client";

import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";

export function AnimatedDetails({ label, children, className = "work-details", id }: {
  label: string; children: ReactNode; className?: string; id?: string;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  const animation = useRef<Animation | null>(null);
  const target = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const settle = () => {
      const element = ref.current;
      if (!element || !animation.current) return;
      animation.current.cancel();
      animation.current = null;
      element.open = target.current;
      delete element.dataset.expanded;
      element.style.overflow = "";
    };
    preference.addEventListener("change", settle);
    return () => { preference.removeEventListener("change", settle); animation.current?.cancel(); };
  }, []);

  function toggle(event: MouseEvent<HTMLElement>) {
    const element = ref.current;
    if (!element || !element.animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    const from = element.getBoundingClientRect().height;
    const opening = animation.current ? !target.current : !element.open;
    target.current = opening;
    animation.current?.cancel();
    element.dataset.expanded = String(opening);
    element.open = opening;
    const to = element.getBoundingClientRect().height;
    // Keep the native content rendered until a closing animation finishes.
    element.open = true;
    element.style.overflow = "hidden";
    const next = element.animate([{ height: `${from}px` }, { height: `${to}px` }], {
      duration: 360, easing: "cubic-bezier(.22,1,.36,1)",
    });
    animation.current = next;
    next.onfinish = () => {
      if (animation.current !== next) return;
      element.open = opening;
      delete element.dataset.expanded;
      element.style.overflow = "";
      animation.current = null;
    };
  }

  return <details ref={ref} id={id} className={className}>
    <summary onClick={toggle}>{label}<span aria-hidden="true">＋</span></summary>
    {children}
  </details>;
}
