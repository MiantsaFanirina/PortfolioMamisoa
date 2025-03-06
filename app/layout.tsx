import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mamisoa's Portfolio",
  description: "Innovative Full-Stack Developer | Business Application Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'!scroll-smooth dark'} data-theme={'dark'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
