"use client";

import * as React from "react";
import { useLocale } from "@/lib/i18n";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";

export function Statement() {
  const { t } = useLocale();

  return (
    <Section id="statement" className="py-144">
      <div className="container-edge grid gap-13 lg:grid-cols-[0.35fr_1fr]">
        <div className="flex items-start gap-4 lg:flex-col lg:gap-8">
          <span className="label-mono">{t.statement.label}</span>
          <Parallax offset={30}>
            <span className="block font-display text-fluid-5xl font-medium leading-none text-paper/10">
              01
            </span>
          </Parallax>
        </div>

        <div>
          <SplitText
            as="p"
            text={t.statement.lead}
            className="font-serif text-fluid-3xl font-light leading-[1.05] text-paper"
          />
          <div className="mt-34 space-y-8 max-w-prose">
            {t.statement.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-fluid-base text-paper/65">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
