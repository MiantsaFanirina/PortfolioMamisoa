import type { Metadata } from "next";
import { Space_Grotesk, Cormorant_Garamond, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { en } from "@/locales/en";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('mamisoa-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();",
          }}
        />
      </head>
      <body className="bg-ink text-paper">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
