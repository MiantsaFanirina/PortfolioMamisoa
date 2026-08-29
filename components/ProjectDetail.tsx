"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Parallax } from "@/components/motion/Parallax";
import { projects, type Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const { t, lang } = useLocale();
  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="surface-ink">
      {/* HERO */}
      <header className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden pt-34">
        <div className="absolute inset-0 -z-10">
          <Parallax offset={80} className="h-full w-full">
            <Image
              src={project.cover}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
          <div className="absolute inset-0 grain opacity-[0.05]" />
        </div>

        <div className="container-edge pb-55">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-fluid-xs uppercase tracking-label text-paper/60 transition-colors hover:text-paper"
          >
            <span className="transition-transform duration-500 ease-editorial group-hover:-translate-x-1">
              ←
            </span>
            {t.project.back}
          </Link>

          <div className="mt-21 flex items-end justify-between gap-8">
            <span className="font-display text-fluid-5xl font-medium leading-none text-paper/15">
              {project.index}
            </span>
            <span className="font-mono text-fluid-xs uppercase tracking-label text-accent">
              {project.field[lang]}
            </span>
          </div>

          <SplitText
            as="h1"
            text={project.title[lang]}
            className="mt-13 block max-w-[18ch] font-display font-medium leading-[0.95] text-fluid-4xl text-paper"
          />
          <p className="mt-13 max-w-prose text-fluid-lg text-paper/70">
            {project.summary[lang]}
          </p>
        </div>
      </header>

      {/* METADATA */}
      <section className="border-y border-paper/12">
        <div className="container-edge grid gap-13 py-34 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: t.project.client, v: project.client[lang] },
            { k: t.project.role, v: project.role[lang] },
            { k: t.project.year, v: project.year },
            { k: t.project.category, v: project.field[lang] },
          ].map((m) => (
            <div key={m.k}>
              <span className="label-mono">{m.k}</span>
              <p className="mt-8 font-display text-fluid-base text-paper">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-144">
        <div className="container-edge grid gap-34 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <span className="label-mono">{t.project.overview}</span>
            <p className="mt-13 font-mono text-fluid-xs uppercase tracking-label text-muted">
              {project.location[lang]}, {project.period[lang]}
            </p>
          </div>
          <div>
            <ul className="border-t border-paper/12">
              {project.highlights.map((h, idx) => (
                <Reveal key={idx}>
                  <li className="grid grid-cols-[3rem_1fr] gap-8 border-b border-paper/12 py-21">
                    <span className="font-mono text-fluid-xs text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display text-fluid-lg font-light leading-snug text-paper/85">
                      {h[lang]}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FULL-BLEED FEATURE */}
      <section className="relative h-[70vh] overflow-hidden">
        <Parallax offset={60} className="h-full w-full">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
        </Parallax>
        <div className="absolute inset-0 bg-ink/20" />
      </section>

      {/* STACK + SOURCE */}
      <section className="py-144">
        <div className="container-edge grid gap-34 lg:grid-cols-[0.4fr_1fr]">
          <span className="label-mono">{t.project.stack}</span>
          <div className="flex flex-wrap gap-3">
            {project.stacks.map((s) => (
              <span
                key={s}
                className="border border-paper/15 px-4 py-2 font-mono text-fluid-xs uppercase tracking-label text-paper/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {project.github && (
          <div className="container-edge mt-55">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-mono text-fluid-xs uppercase tracking-label text-ink transition-colors hover:bg-accent-soft"
            >
              {t.project.source}
              <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        )}
      </section>

      {/* RELATED */}
      <section className="border-t border-paper/12 py-89">
        <div className="container-edge">
          <span className="label-mono">{t.project.related}</span>
          <ul className="mt-21 grid gap-px bg-paper/10 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/work/${o.slug}`}
                  className="group flex h-full flex-col justify-between bg-ink p-21 transition-colors hover:bg-paper/[0.04]"
                >
                  <span className="font-mono text-fluid-xs text-accent">{o.index}</span>
                  <span className="mt-13 block font-display text-fluid-lg text-paper transition-transform duration-500 ease-editorial group-hover:translate-x-2">
                    {o.title[lang]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PREV / NEXT */}
      <nav className="grid grid-cols-2 border-t border-paper/12" aria-label="Project pagination">
        <Link
          href={`/work/${prev.slug}`}
          className="group border-r border-paper/12 p-34 transition-colors hover:bg-paper/[0.04]"
        >
          <span className="label-mono">{t.project.prev}</span>
          <span className="mt-8 block font-display text-fluid-lg text-paper transition-transform duration-500 ease-editorial group-hover:-translate-x-2">
            {prev.title[lang]}
          </span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group p-34 text-right transition-colors hover:bg-paper/[0.04]"
        >
          <span className="label-mono">{t.project.next}</span>
          <span className="mt-8 block font-display text-fluid-lg text-paper transition-transform duration-500 ease-editorial group-hover:translate-x-2">
            {next.title[lang]}
          </span>
        </Link>
      </nav>
    </article>
  );
}
