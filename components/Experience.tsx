"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export function Experience() {
  const { t, lang } = useLocale();

  return (
    <Section id="experience" className="py-144">
      <div className="container-edge">
        <SectionHeading
          label={t.experience.label}
          title={t.experience.title}
          intro={t.experience.intro}
          index="04"
        />

        <div className="mt-89 border-t border-paper/12">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid gap-6 border-b border-paper/12 py-21 transition-colors duration-500 hover:bg-paper/[0.03] md:grid-cols-[10rem_1fr_1.1fr] md:gap-13"
              >
                <span className="font-mono text-fluid-sm text-accent">{p.year}</span>
                <div>
                  <h3 className="font-display text-fluid-lg font-medium text-paper transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                    {p.title[lang]}
                  </h3>
                  <p className="mt-2 font-mono text-fluid-xs uppercase tracking-label text-muted">
                    {p.role[lang]} · {p.client[lang]}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-fluid-xs text-paper/45">
                    {p.period[lang]} — {p.location[lang]}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {p.stacks.slice(0, 5).map((s) => (
                      <span
                        key={s}
                        className="border border-paper/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-label text-paper/55"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stacks.length > 5 && (
                      <span className="px-2 py-1 font-mono text-[0.65rem] text-paper/35">
                        +{p.stacks.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
