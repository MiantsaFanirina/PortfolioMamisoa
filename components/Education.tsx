"use client";

import * as React from "react";
import { useLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { education } from "@/data/content";

export function Education() {
  const { t, lang } = useLocale();

  return (
    <Section id="education" className="py-144 surface-paper text-ink">
      <div className="container-edge">
        <SectionHeading
          label={t.education.label}
          title={t.education.title}
          index="05"
          tone="paper"
        />

        <RevealGroup className="mt-89 grid gap-13 md:grid-cols-3">
          {education.map((e, i) => (
            <RevealItem key={i} className="border-t border-ink/15 pt-13">
              <span className="font-mono text-fluid-xs uppercase tracking-label text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-13 font-display text-fluid-lg font-medium leading-tight text-ink">
                {e.title[lang]}
              </h3>
              <p className="mt-8 text-fluid-sm text-ink/60">{e.desc[lang]}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
