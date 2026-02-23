// components/layout/footer-section.tsx
import Image from "next/image";
import Link from "next/link";
import { technopile } from "@/app/fonts";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full text-white">
      {/* Background images (light & dark) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/footerbg-light.webp"
          alt="City skyline background"
          fill
          priority
          className="object-cover block dark:hidden"
        />
        <Image
          src="/footerbg-dark.webp"
          alt="City skyline background (dark)"
          fill
          priority
          className="hidden object-cover dark:block"
        />
      </div>

      <div
        className="absolute inset-0 -z-10 bg-red-700/40 dark:bg-black/40"
        aria-hidden="true"
      />

      {/* Content – aligned with navbar */}
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6 md:pb-14 md:pt-20 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
          {/* Left: logo + blurb */}
          <div className="max-w-xl space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/labor-crisis-logo-01.svg"
                alt="Labor Crisis logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <span
                className={`${technopile.className} text-[24px] md:text-[28px] lg:text-[32px] tracking-[0.2em] leading-none text-white`}
              >
                LABOR CRISIS
              </span>
            </div>

            <p className="text-sm leading-relaxed md:text-base">
              Labor Crisis Pte. Ltd. is a Singapore-based employment platform
              connecting employers with skilled and dependable talent across
              labor-critical roles. We help businesses respond quickly to
              workforce demands while empowering job seekers with real
              opportunities that matter.
            </p>
          </div>

          {/* Right: link columns */}
          <nav
            className="grid gap-8 text-left text-sm md:grid-cols-3 md:text-base"
            aria-label="Footer navigation"
          >
            {/* Explore */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Explore</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/jobs"
                    className="transition-colors hover:text-red-200"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/post-a-job"
                    className="transition-colors hover:text-red-200"
                  >
                    Employers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Company</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="transition-colors hover:text-red-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-red-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Legal</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors hover:text-red-200"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors hover:text-red-200"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="mt-10 text-center text-xs md:mt-12 md:text-sm">
          © {year} Labor Crisis Pte. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}