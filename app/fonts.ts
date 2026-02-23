// app/fonts.ts
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter } from "next/font/google";

// Base app fonts
export const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 Technopile Demo (local .ttf)
export const technopile = localFont({
  src: "./fonts/technophile.ttf", // path is relative to THIS file
  variable: "--font-technopile",
  display: "swap",
});