"use client";

import * as React from "react";
import { useLocale } from "@/lib/i18n";
import { Section } from "@/components/Section";
import { SplitText } from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import { profile, social } from "@/data/content";

export function Contact() {
  const { t } = useLocale();

  return (
    <Section id="contact" className="surface-paper py-144 text-ink">
      <div className="container-edge">
        <span className="label-mono text-ink/55">{t.contact.label}</span>
        <SplitText
          as="h2"
          text={t.contact.title}
          className="mt-13 block font-display font-medium leading-[0.95] text-fluid-4xl text-ink"
        />
        <Reveal>
          <p className="mt-21 max-w-prose text-fluid-base text-ink/60">{t.contact.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-34 flex flex-col items-start gap-13 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-4 rounded-full bg-accent px-8 py-5 font-mono text-fluid-xs uppercase tracking-label text-ink transition-colors hover:bg-accent-deep"
          >
            {t.contact.cta}
            <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-1">
              →
            </span>
          </a>

          <div className="flex items-center gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 transition-colors hover:border-accent hover:bg-ink"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.icon} alt="" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <span className="mt-34 block font-mono text-fluid-xs text-ink/45">
          {profile.email}
        </span>
      </div>
    </Section>
  );
}
