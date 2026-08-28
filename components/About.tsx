"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Magnetic } from "@/components/motion/Magnetic";
import { profile } from "@/data/content";

export function About() {
  const { t, lang } = useLocale();

  return (
    <Section id="about" className="py-144">
      <div className="container-edge grid items-center gap-34 lg:grid-cols-[0.9fr_1.1fr]">
        <Parallax offset={34} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 80vw, 35vw"
              className="object-cover object-top grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-accent/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent mix-blend-multiply" />
          </div>
          <div className="mt-13 flex gap-13">
            {[
              { n: "10", l: lang === "fr" ? "ans" : "yrs" },
              { n: String(7).padStart(2, "0"), l: lang === "fr" ? "missions" : "engagements" },
              { n: "05", l: lang === "fr" ? "pays" : "countries" },
            ].map((s) => (
              <div key={s.l}>
                <span className="block font-display text-fluid-2xl font-medium text-paper">
                  {s.n}
                </span>
                <span className="label-mono">{s.l}</span>
              </div>
            ))}
          </div>
        </Parallax>

        <div>
          <SectionHeading label={t.about.label} title={t.about.title} index="07" />
          <div className="mt-34 space-y-8">
            {t.about.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="max-w-prose text-fluid-base text-paper/65">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-34">
            <Magnetic>
              <a
                href={profile.cv}
                download
                className="group inline-flex items-center gap-3 rounded-full border border-paper/20 px-7 py-4 font-mono text-fluid-xs uppercase tracking-label text-paper transition-colors hover:border-accent hover:text-accent"
              >
                <motion.span
                  className="grid h-6 w-6 place-items-center rounded-full bg-accent text-ink"
                  whileHover={{ rotate: 45 }}
                >
                  ↓
                </motion.span>
                {t.about.resume}
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
