"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 34,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  staggerChildren = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(staggerChildren, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
