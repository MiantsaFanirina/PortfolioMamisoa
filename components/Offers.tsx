"use client";

import * as React from "react";
import { useLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { offers } from "@/data/content";

export function Offers() {
  const { t, lang } = useLocale();

  return (
    <Section id="offers" className="py-144 surface-paper text-ink">
      <div className="container-edge">
        <SectionHeading
          label={t.offers.label}
          title={t.offers.title}
          intro={t.offers.intro}
          index="03"
          tone="paper"
        />

        <RevealGroup className="mt-89 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <RevealItem
              key={i}
              className="group relative bg-paper p-13 transition-colors duration-500 hover:bg-ink"
            >
              <span className="font-mono text-fluid-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-13 font-display text-fluid-lg font-medium leading-tight text-ink transition-colors duration-500 group-hover:text-paper">
                {o.title[lang]}
              </h3>
              <p className="mt-8 text-fluid-sm text-ink/60 transition-colors duration-500 group-hover:text-paper/65">
                {o.description[lang]}
              </p>
              <span className="mt-13 block h-px w-0 bg-accent transition-all duration-700 ease-editorial group-hover:w-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
