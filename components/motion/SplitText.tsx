"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  as = "span",
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as];

  if (reduce) {
    const Plain = as as keyof React.JSX.IntrinsicElements;
    return <Plain className={className}>{text}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger },
              },
            }}
          >
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
