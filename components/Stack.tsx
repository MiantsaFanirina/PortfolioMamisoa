"use client";

import * as React from "react";
import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/Section";
import { techStack } from "@/data/content";

export function Stack() {
  const { t } = useLocale();
  const loop = [...techStack, ...techStack];

  return (
    <Section id="stack" className="py-144 overflow-hidden">
      <div className="container-edge">
        <SectionHeading label={t.stack.label} title={t.stack.title} intro={t.stack.intro} index="06" />
      </div>

      <div className="mask-fade-x mt-89 flex w-full">
        <div className="flex shrink-0 animate-marquee items-center gap-21 pr-21 [--marquee-duration:42s]">
          {loop.map((tech, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-5 border border-paper/10 px-13 py-8"
            >
              <Image
                src={tech.src}
                alt={tech.label}
                width={44}
                height={44}
                className="h-11 w-11 object-contain opacity-80"
              />
              <span className="whitespace-nowrap font-mono text-fluid-xs uppercase tracking-label text-paper/70">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center gap-21 pr-21 [--marquee-duration:42s]"
        >
          {loop.map((tech, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-5 border border-paper/10 px-13 py-8"
            >
              <Image
                src={tech.src}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain opacity-80"
              />
              <span className="whitespace-nowrap font-mono text-fluid-xs uppercase tracking-label text-paper/70">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
