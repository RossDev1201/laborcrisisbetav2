// components/sections/featured-jobs-section.tsx
import { MapPin, Clock3 } from "lucide-react";

type FeaturedJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  workType: string;
  salary: string;
};

const featuredJobs: FeaturedJob[] = [
  {
    id: "product-designer",
    title: "PRODUCT DESIGNER",
    company: "NESTLE BUSINESS SERVICES AOA INC",
    location: "Manila, Philippines",
    workType: "Hybrid",
    salary: "$600/month",
  },
  {
    id: "receptionist",
    title: "RECEPTIONIST (BEAUTY INDUSTRY)",
    company: "PRIVATE ADVERTISER",
    location: "Singapore",
    workType: "Full time",
    salary: "$2,500–3,500/month (SGD)",
  },
  {
    id: "project-engineer",
    title: "PROJECT ENGINEER (ELECTRICAL)",
    company: "ALWAYS HIRED PTE. LTD.",
    location: "Central Region, Singapore",
    workType: "Full time",
    salary: "$4,000–5,000/month (SGD)",
  },
  {
    id: "accountant",
    title: "ACCOUNTANT",
    company: "FELCOR PETROLEUM PTE LTD",
    location: "Central Region, Singapore",
    workType: "Full time",
    salary: "$4,000–5,300/month (SGD)",
  },
  {
    id: "preschool-teacher",
    title: "PRESCHOOL TEACHERS",
    company: "WORKPLUS RECRUITMENT CENTRE PTE LTD",
    location: "Singapore",
    workType: "Full time",
    salary: "$3,000–4,000/month (SGD)",
  },
  {
    id: "events-manager",
    title: "EVENTS MANAGER",
    company: "NANYANG TECHNOLOGICAL UNIVERSITY",
    location: "Pioneer, West Region, Singapore",
    workType: "Hybrid",
    salary: "$4,000–5,300/month (SGD)",
  },
];

export function FeaturedJobsSection() {
  return (
    <section
      id="featured-jobs"
      className="bg-background py-16 md:py-20 lg:py-24 dark:bg-[#111111]"
      aria-labelledby="featured-jobs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="featured-jobs-heading"
            className="text-[24px] font-semibold tracking-[0.18em] text-gray-900 md:text-[28px] lg:text-[32px] dark:text-white"
          >
            <span className="text-[#E61E25]">FEATURED</span>{" "}
            <span>JOBS</span>
          </h2>
        </div>

        {/* Grid of job cards */}
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {featuredJobs.map((job) => (
            <article
              key={job.id}
              className="
                flex h-full flex-col justify-between
                rounded-[24px] bg-[#dfdede] px-6 py-6
                shadow-[0_10px_30px_rgba(15,23,42,0.08)]
                dark:bg-[#444444]
              "
            >
              {/* Top content */}
              <header className="space-y-2">
                <h3 className="text-sm font-extrabold tracking-[0.08em] text-gray-900 md:text-base dark:text-white">
                  {job.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.08em] text-gray-600 dark:text-gray-200">
                  {job.company}
                </p>
              </header>

              {/* Meta: location + work type */}
              <dl className="mt-4 space-y-1 text-sm text-gray-700 dark:text-gray-100">
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Location</dt>
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <dd>{job.location}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Work type</dt>
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                  <dd>{job.workType}</dd>
                </div>
              </dl>

              {/* Bottom row: salary + button */}
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-[#00A676] dark:text-[#4CE3B2]">
                  {job.salary}
                </p>

                <button
                  type="button"
                  className="
                    rounded-[999px] bg-[#E61E25] px-5 py-2
                    text-sm font-semibold text-white
                    shadow-sm hover:bg-[#cc151c]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E61E25]
                    focus-visible:ring-offset-transparent
                  "
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}