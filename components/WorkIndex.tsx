"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/Section";
import { projects } from "@/data/projects";

export function WorkIndex() {
  const { t, lang } = useLocale();

  return (
    <Section id="work" className="py-144">
      <div className="container-edge">
        <SectionHeading
          label={t.work.label}
          title={t.work.title}
          intro={t.work.intro}
          index="02"
        />

        <div className="mt-89">
          <ul className="border-t border-paper/12">
            {projects.map((p) => {
              const title = p.title[lang];
              return (
                <li key={p.slug} className="group">
                  <Link
                    href={`/work/${p.slug}`}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-paper/12 py-13 transition-colors duration-500 hover:bg-paper/[0.03]"
                  >
                    <span className="font-mono text-fluid-xs text-accent">
                      {p.index}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-fluid-xl font-medium leading-tight text-paper transition-transform duration-500 ease-editorial group-hover:translate-x-3">
                        {title}
                      </span>
                      <span className="mt-2 block font-mono text-fluid-xs uppercase tracking-label text-muted">
                        {p.field[lang]} · {p.client[lang]}
                      </span>
                    </span>
                    <span className="hidden text-right font-mono text-fluid-xs text-paper/55 sm:block">
                      {p.location[lang]}
                      <span className="block text-muted">{p.year}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-34 flex items-center justify-between">
            <span className="label-mono">{t.common.index}</span>
            <span className="font-mono text-fluid-xs text-paper/45">
              {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
