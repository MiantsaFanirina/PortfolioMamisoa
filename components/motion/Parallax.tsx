"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** positive moves slower (up), negative moves opposite */
  offset?: number;
  axis?: "y" | "x";
};

export function Parallax({ children, className, offset = 60, axis = "y" }: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const value = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const style = axis === "y" ? { y: reduce ? 0 : value } : { x: reduce ? 0 : value };

  return (
    <div ref={ref} className={className}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  );
}

export function ParallaxLayer({
  children,
  className,
  range = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range * 100}%`, `${range * 100}%`]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }}>{children}</motion.div>
    </div>
  );
}
