"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  "home",
  "about",
  "work",
  "offers",
  "experience",
  "education",
  "contact",
] as const;

export function Navigation() {
  const { t, lang, setLang } = useLocale();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const base = pathname === "/" ? "" : "/";
  const [visible, setVisible] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y < 80) setVisible(true);
    else setVisible(y < prev);
  });

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-edge items-center justify-between rounded-full border px-5 py-3 transition-colors duration-500",
            scrolled
              ? "border-paper/12 bg-ink/70 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
          aria-label="Primary"
        >
          <Link
            href={`${base}#top`}
            className="group flex items-center gap-3"
            aria-label={profile.name}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-accent font-mono text-fluid-xs text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
              {profile.initial}
            </span>
            <span className="hidden font-mono text-fluid-xs uppercase tracking-label text-paper/80 sm:block">
              {profile.name}
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link
                  href={`${base}#${key === "home" ? "top" : key}`}
                  className="group relative font-mono text-fluid-xs uppercase tracking-[0.18em] text-paper/65 transition-colors hover:text-paper"
                >
                  {t.nav[key]}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 ease-editorial group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={theme === "light"}
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4.2" />
                  <path d="M12 2v2.5M12 19.5V22M4.5 12H2M22 12h-2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
            </button>
            <div
              className="flex items-center rounded-full border border-paper/15 p-0.5"
              role="group"
              aria-label={t.common.language}
            >
              {(["en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={cn(
                    "rounded-full px-3 py-1 font-mono text-fluid-xs uppercase tracking-label transition-colors",
                    lang === l ? "bg-accent text-ink" : "text-paper/55 hover:text-paper"
                  )}
                >
                  {t.common[l]}
                </button>
              ))}
            </div>

            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/15 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label={t.common.menu}
            >
              <span className="flex flex-col gap-1">
                <span className="block h-px w-4 bg-paper" />
                <span className="block h-px w-4 bg-paper" />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex flex-col bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-mono text-fluid-xs uppercase tracking-label text-paper/60">
                {profile.name}
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label={t.common.close}
                className="grid h-10 w-10 place-items-center rounded-full border border-paper/15"
              >
                <span className="text-2xl leading-none text-paper">×</span>
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_KEYS.map((key, i) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`${base}#${key === "home" ? "top" : key}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-paper/10 py-4"
                  >
                    <span className="font-mono text-fluid-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-fluid-2xl text-paper">
                      {t.nav[key]}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
