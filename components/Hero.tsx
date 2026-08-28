"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { profile } from "@/data/content";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { Magnetic } from "@/components/motion/Magnetic";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-34"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-small opacity-[0.07] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-1/3 top-0 -z-10 h-[80vh] w-[80vw] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grain opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-55 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-edge grid items-center gap-13 lg:grid-cols-[1.4fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="label-mono"
          >
            {t.hero.kicker}
          </motion.span>

          <h1 className="mt-8 font-display font-medium leading-[0.95] text-fluid-4xl">
            <SplitText text={t.hero.role} delay={0.15} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-13 max-w-prose text-fluid-lg text-paper/70"
          >
            {t.hero.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-21 flex flex-wrap items-center gap-5"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-mono text-fluid-xs uppercase tracking-label text-ink transition-colors hover:bg-accent-soft"
              >
                {t.hero.ctaWork}
                <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-paper/20 px-7 py-4 font-mono text-fluid-xs uppercase tracking-label text-paper transition-colors hover:border-paper/50"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>

        <Parallax offset={40} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-paper/15" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top grayscale contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 ring-1 ring-inset ring-accent/30" />
            </div>
            <span className="absolute -bottom-5 left-5 font-mono text-fluid-xs uppercase tracking-label text-paper/70">
              {t.hero.location}
            </span>
          </div>
        </Parallax>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="container-edge mt-21 flex items-center gap-3"
      >
        <span className="label-mono">{t.common.scroll}</span>
        <span className="relative h-10 w-px overflow-hidden bg-paper/20">
          <motion.span
            className="absolute left-0 top-0 h-4 w-px bg-accent"
            animate={reduce ? {} : { y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
