import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/provider";

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
        <html lang="en" className={'dark'}>
        <head>
            {/* Add the favicon here */}
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased !scroll-smooth `}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
