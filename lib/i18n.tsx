"use client";

import * as React from "react";
import { en, type Dict, type Lang } from "@/locales/en";
import { fr } from "@/locales/fr";

type LocaleContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const dictionaries: Record<Lang, Dict> = { en, fr };

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "mamisoa-lang";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    const initial: Lang =
      stored === "en" || stored === "fr"
        ? stored
        : navigator.language?.toLowerCase().startsWith("fr")
        ? "fr"
        : "en";
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const toggle = React.useCallback(() => {
    setLang(lang === "en" ? "fr" : "en");
  }, [lang, setLang]);

  const value = React.useMemo<LocaleContextValue>(
    () => ({ lang, setLang, toggle, t: dictionaries[lang] }),
    [lang, setLang, toggle]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
