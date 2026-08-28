import type { Variants } from "framer-motion";

export const easeEditorial = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeEditorial },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeEditorial } },
};

export const clipUp: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 24 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 1, ease: easeEditorial },
  },
};

export const stagger = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
