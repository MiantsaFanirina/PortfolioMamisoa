import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcss_animate from "tailwindcss-animate";

type AddVariablesForColorsParams = {
  addBase: (base: Record<string, Record<string, string>>) => void;
  theme: (key: string) => Record<string, string>;
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./locales/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          900: "#0B0B0C",
          800: "#131318",
          700: "#1C1C22",
          600: "#26262E",
          500: "#33333C",
        },
        paper: {
          DEFAULT: "rgb(var(--c-paper) / <alpha-value>)",
          100: "#F5F2EC",
          200: "#E3DDD2",
          300: "#D2CABC",
          400: "#BCB3A2",
        },
        accent: {
          DEFAULT: "rgb(var(--c-accent) / <alpha-value>)",
          soft: "rgb(var(--c-accent-soft) / <alpha-value>)",
          deep: "rgb(var(--c-accent-deep) / <alpha-value>)",
        },
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      spacing: {
        13: "0.8125rem",
        21: "1.3125rem",
        34: "2.125rem",
        55: "3.4375rem",
        89: "5.5625rem",
        144: "9rem",
        233: "14.5625rem",
        377: "23.5625rem",
      },
      fontSize: {
        "fluid-xs": ["clamp(0.75rem, 0.71rem + 0.18vw, 0.85rem)", { lineHeight: "1.5" }],
        "fluid-sm": ["clamp(0.85rem, 0.8rem + 0.25vw, 0.95rem)", { lineHeight: "1.6" }],
        "fluid-base": ["clamp(1rem, 0.94rem + 0.3vw, 1.15rem)", { lineHeight: "1.7" }],
        "fluid-lg": ["clamp(1.15rem, 1rem + 0.7vw, 1.5rem)", { lineHeight: "1.55" }],
        "fluid-xl": ["clamp(1.4rem, 1.1rem + 1.4vw, 2.1rem)", { lineHeight: "1.3" }],
        "fluid-2xl": ["clamp(2rem, 1.4rem + 2.8vw, 3.4rem)", { lineHeight: "1.1" }],
        "fluid-3xl": ["clamp(2.6rem, 1.6rem + 4.6vw, 5rem)", { lineHeight: "1.02" }],
        "fluid-4xl": ["clamp(3.2rem, 1.6rem + 7vw, 7rem)", { lineHeight: "0.98" }],
        "fluid-5xl": ["clamp(4rem, 1.8rem + 10vw, 10rem)", { lineHeight: "0.92" }],
      },
      maxWidth: {
        edge: "1600px",
        prose: "68ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
        label: "0.28em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--marquee-duration, 40s) linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [
    tailwindcss_animate,
    addVariablesForColors,
    ({ matchUtilities, theme }: { matchUtilities: Function; theme: Function }) => {
      matchUtilities(
        {
          "bg-grid": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: AddVariablesForColorsParams) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val as string])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
