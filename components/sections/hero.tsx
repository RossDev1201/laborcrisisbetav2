// components/sections/hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ChevronDown } from "lucide-react";

const employmentTypes = [
  { value: "", label: "Full time" },
  { value: "part-time", label: "Part time" },
  { value: "contract", label: "Contract" },
  { value: "temporary", label: "Temporary" },
];

const salaryRanges = [
  { value: "", label: "Salary range" },
  { value: "below-2k", label: "Below $2,000" },
  { value: "2k-4k", label: "$2,000 – $4,000" },
  { value: "4k-6k", label: "$4,000 – $6,000" },
  { value: "6k-plus", label: "$6,000+" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      {/* IMAGE LAYER */}
      <div
        className="
          pointer-events-none absolute -z-10
          inset-x-0 bottom-0 h-[320px] sm:h-[360px]
          lg:inset-0 lg:h-full
        "
      >
        {/* Light */}
        <Image
          src="/hero-light-new.webp"
          alt="City skyline background with professionals"
          fill
          priority
          className="
            block h-full w-full object-cover
            object-bottom
            lg:object-[50%_65%]
            dark:hidden
          "
        />
        {/* Dark */}
        <Image
          src="/hero-dark-new.webp"
          alt="City skyline background with professionals (dark)"
          fill
          priority
          className="
            hidden h-full w-full object-cover
            object-bottom
            lg:object-[50%_65%]
            dark:block
          "
        />
      </div>

      {/* CONTENT LAYER */}
      <div
        className="
          relative z-10
          mx-auto flex max-w-[402px] flex-col items-center
          px-5 pt-10 pb-[260px]
          min-h-[850px]
          md:max-w-7xl md:px-6
          lg:px-8 lg:pt-24 lg:pb-[260px]
        "
      >
        {/* Headline */}
        <div className="max-w-3xl text-center">
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="block dark:text-[#E5E7EB] text-gray-900">
              When Labor is Critical,
            </span>
            <span className="mt-2 block text-[#E61E25]">
              We Deliver
            </span>
          </h1>
        </div>

        {/* Search card */}
        <div className="mt-[50px] flex w-full justify-center">
          <form
            action="/jobs"
            method="GET"
            className="
              w-full max-w-[572px]
              rounded-[40px]
              bg-[#E5E5E5] px-5 pt-6 pb-8
              dark:bg-[#111111]
              flex flex-col gap-4
              lg:h-[385px] lg:justify-center
            "
          >
            {/* Job input */}
            <div
              className="
                flex items-center gap-3 rounded-xl
                bg-white px-5 py-3.5 text-[18px] text-neutral-900 shadow-sm
                dark:bg-[#202020] dark:text-[#D1D5DB] dark:border dark:border-[#3F3F46]
              "
            >
              <label htmlFor="q" className="sr-only">
                Job title or keyword
              </label>
              <span className="inline-flex h-6 w-6 items-center justify-center text-neutral-700 dark:text-[#E5E7EB]">
                <Search className="h-4 w-4" />
              </span>
              <input
                id="q"
                name="q"
                type="text"
                placeholder="Enter job, position, etc."
                className="
                  flex-1 border-none bg-transparent text-[18px]
                  text-neutral-900 placeholder:text-neutral-400
                  dark:text-[#D1D5DB] dark:placeholder:text-[#6B7280]
                  focus:outline-none focus:ring-0
                "
              />
            </div>

            {/* Location input */}
            <div
              className="
                flex items-center gap-3 rounded-xl
                bg-white px-5 py-3.5 text-[18px] text-neutral-900 shadow-sm
                dark:bg-[#202020] dark:text-[#D1D5DB] dark:border dark:border-[#3F3F46]
              "
            >
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <span className="inline-flex h-6 w-6 items-center justify-center text-neutral-700 dark:text-[#E5E7EB]">
                <MapPin className="h-4 w-4" />
              </span>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Enter location"
                className="
                  flex-1 border-none bg-transparent text-[18px]
                  text-neutral-900 placeholder:text-neutral-400
                  dark:text-[#D1D5DB] dark:placeholder:text-[#6B7280]
                  focus:outline-none focus:ring-0
                "
              />
            </div>

            {/* Filters row */}
            <div className="flex flex-col gap-3 md:flex-row">
              {/* Employment type */}
              <div className="flex-1">
                <label htmlFor="type" className="sr-only">
                  Employment type
                </label>
                <div
                  className="
                    relative rounded-xl bg-white px-5 py-3.5 text-[18px] text-neutral-900 shadow-sm
                    dark:bg-[#202020] dark:text-[#D1D5DB] dark:border dark:border-[#3F3F46]
                  "
                >
                  <select
                    id="type"
                    name="type"
                    className="
                      w-full appearance-none border-none bg-transparent pr-7 text-[18px]
                      text-neutral-900 dark:text-[#D1D5DB]
                      focus:outline-none focus:ring-0
                    "
                    defaultValue=""
                  >
                    {employmentTypes.map((option) => (
                      <option
                        key={option.value || "default"}
                        value={option.value}
                        className="bg-white text-neutral-900 dark:bg-[#202020] dark:text-[#D1D5DB]"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-900 dark:text-[#E5E7EB]" />
                </div>
              </div>

              {/* Salary range */}
              <div className="flex-1">
                <label htmlFor="salary" className="sr-only">
                  Salary range
                </label>
                <div
                  className="
                    relative rounded-xl bg-white px-5 py-3.5 text-[18px] text-neutral-900 shadow-sm
                    dark:bg-[#202020] dark:text-[#D1D5DB] dark:border dark:border-[#3F3F46]
                  "
                >
                  <select
                    id="salary"
                    name="salary"
                    className="
                      w-full appearance-none border-none bg-transparent pr-7 text-[18px]
                      text-neutral-900 dark:text-[#D1D5DB]
                      focus:outline-none focus:ring-0
                    "
                    defaultValue=""
                  >
                    {salaryRanges.map((option) => (
                      <option
                        key={option.value || "default"}
                        value={option.value}
                        className="bg-white text-neutral-900 dark:bg-[#202020] dark:text-[#D1D5DB]"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-900 dark:text-[#E5E7EB]" />
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="grid gap-3 md:grid-cols-2">
              <button
                type="submit"
                className="
                  rounded-xl bg-[#E61E25] py-3.5 text-center text-[18px]
                  font-semibold text-white shadow-sm
                  hover:bg-[#cc151c]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                "
              >
                Search Jobs
              </button>

              <Link
                href="/post-a-job"
                className="
                  rounded-xl border border-[#009D8C]
                  bg-transparent py-3.5 text-center text-[18px] font-semibold
                  text-[#009D8C]
                "
              >
                Post a Job
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}