"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { profile } from "@/data/content";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="surface-ink border-t border-paper/10 pb-13 pt-55">
      <div className="container-edge flex flex-col gap-13 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            href="#top"
            className="font-display text-fluid-2xl font-medium text-paper transition-colors hover:text-accent"
          >
            {profile.name}
          </Link>
          <p className="mt-8 max-w-xs font-mono text-fluid-xs uppercase tracking-label text-muted">
            {t.footer.note}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-fluid-xs uppercase tracking-label text-paper/55 transition-colors hover:text-paper"
          >
            <span className="transition-transform duration-500 ease-editorial group-hover:-translate-y-1">
              ↑
            </span>
            Top
          </Link>
          <span className="font-mono text-fluid-xs text-muted">{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
