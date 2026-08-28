"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function Magnetic({
  children,
  className,
  strength = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 18 });
  const y = useSpring(my, { stiffness: 200, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    my.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
