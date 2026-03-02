// app/(auth)/layout.tsx
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#FFFAFB] dark:bg-[#020617]">
      {/* 
        We don't render the logo/header here anymore.
        Navbar + logo come from the root app/layout.tsx.
      */}
      <div className="flex justify-center pt-24 pb-16">
        {children}
      </div>
    </main>
  );
}