// components/layout/navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { ChevronsDown, Menu } from "lucide-react";
import { ModeToggle } from "@/components/layout/mode-toggle"; // 👈 updated path
import { technopile } from "@/app/fonts";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-500 bg-white dark:border-gray-500 dark:bg-gray-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo: LC icon + wordmark */}
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/labor-crisis-logo-01.svg"
    alt="Labor Crisis logo"
    width={60}
    height={60}
    className="h-10 w-auto md:h-12"
    priority
  />

  <span
    className={`
      ${technopile.className}
      text-[24px] md:text-[28px] lg:text-[32px]
      tracking-[0.2em]
      leading-none
      text-black dark:text-white
      relative -translate-y-[4px]  // 👈 key part
    `}
  >
    LABOR CRISIS
  </span>
</Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Links + toggle group */}
          <div className="flex items-center gap-6">
            <details className="relative group">
              <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-gray-900 hover:text-red-700 dark:text-gray-100 dark:hover:text-red-400">
                <span>How it Works</span>
                <ChevronsDown className="h-4 w-4" aria-hidden />
              </summary>

              <div className="absolute left-0 mt-2 w-40 rounded-md border border-gray-200 bg-white py-2 text-sm shadow-lg dark:border-gray-800 dark:bg-gray-900">
                <Link
                  href="#for-employers"
                  className="block px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  For Clients
                </Link>
                <Link
                  href="#for-workers"
                  className="block px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  For Service Providers
                </Link>
              </div>
            </details>

            <Link
              href="#pricing"
              className="text-sm font-medium text-black hover:text-red-800 dark:text-gray-100 dark:hover:text-red-400"
            >
              Pricing
            </Link>

            <ModeToggle />
          </div>

          {/* Right side actions */}
          <div className="flex items-stretch gap-6">
            <div className="flex items-center gap-3">
              <Link
                href="/post-a-job"
                className="rounded-full border border-red-600 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50
           dark:text-red-300 dark:hover:bg-red-700 dark:hover:text-white"
              >
                Post a Job
              </Link>
              <Link
                href="/jobs"
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Find Jobs
              </Link>
            </div>

            {/* Divider */}
            <div
              className="w-px self-stretch bg-gray-200 dark:bg-gray-800"
              aria-hidden
            />

            <div className="flex items-center">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-900 hover:text-red-800 dark:text-gray-100 dark:hover:text-red-400"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-md border border-gray-300 p-2 dark:border-gray-700">
            <Menu className="h-5 w-5 text-gray-900 dark:text-gray-100" />
          </summary>

          <div className="absolute right-0 mt-2 w-56 rounded-md border border-gray-200 bg-white p-3 text-sm shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <Link
              href="#how-it-works"
              className="block py-1.5 text-gray-900 hover:text-red-800 dark:text-gray-100 dark:hover:text-red-400"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="block py-1.5 text-gray-900 hover:text-red-800 dark:text-gray-100 dark:hover:text-red-400"
            >
              Pricing
            </Link>

            <div className="my-3 border-t border-gray-200 dark:border-gray-800" />

            <Link
              href="/post-a-job"
              className="mb-2 block rounded-full border border-red-600 px-4 py-2 text-center text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            >
              Post a Job
            </Link>
            <Link
              href="/jobs"
              className="mb-2 block rounded-full bg-red-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-red-700"
            >
              Find Jobs
            </Link>

            <Link
              href="/login"
              className="block text-sm font-medium text-gray-900 hover:text-red-800 dark:text-gray-100 dark:hover:text-red-400"
            >
              Login
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}