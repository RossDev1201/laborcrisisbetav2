// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/footer";
import { SectionNav } from "@/components/layout/section-nav";
import { ThemeProvider } from "@/components/layout/theme-provider";

// 👇 import fonts from app/fonts.ts
import { inter, geistSans, geistMono } from "./fonts";

export const metadata: Metadata = {
  title: "Labor Crisis",
  description: "Fast, focused workforce solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body
        className={`
          min-h-screen
          bg-background text-foreground
          font-sans antialiased
          ${geistSans.variable} ${geistMono.variable}
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main>
            <div id="top" />
            {children}
            <SectionNav />
          </main>

          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}