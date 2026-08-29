"use client";

import * as React from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "mamisoa-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setThemeState(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const apply = React.useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = React.useCallback(() => {
    apply(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  }, [apply]);

  const setTheme = React.useCallback((t: Theme) => apply(t), [apply]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, toggle, setTheme }),
    [theme, toggle, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
