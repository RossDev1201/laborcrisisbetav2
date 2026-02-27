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
      className="bg-[#EEEEEE] py-16 md:py-20 lg:py-24 dark:bg-[#1A1A1A]"
      aria-labelledby="featured-jobs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="featured-jobs-heading"
            className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-gray-900 dark:text-white"
          >
            <span className="text-[#E61E25]">FEATURED</span>{" "}
            <span>JOBS</span>
          </h2>
        </div>

        {/* Grid of job cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {featuredJobs.map((job) => (
            <article
              key={job.id}
              className="
                flex flex-col justify-between
                rounded-[20px] bg-white px-8 py-8 md:px-10 md:py-10
                shadow-sm
                dark:bg-[#2D2D2D]
                min-h-[280px]
              "
            >
              {/* Top content */}
              <header className="space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-base md:text-lg font-normal uppercase tracking-wide text-gray-900 dark:text-gray-200">
                  {job.company}
                </p>
              </header>

              {/* Meta: location + work type */}
              <dl className="mt-6 space-y-2 text-base md:text-lg text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <dt className="sr-only">Location</dt>
                  <MapPin className="h-5 w-5 text-gray-900 dark:text-gray-200 flex-shrink-0" aria-hidden="true" />
                  <dd>{job.location}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <dt className="sr-only">Work type</dt>
                  <Clock3 className="h-5 w-5 text-gray-900 dark:text-gray-200 flex-shrink-0" aria-hidden="true" />
                  <dd>{job.workType}</dd>
                </div>
              </dl>

              {/* Bottom row: salary + button */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-base md:text-lg font-semibold text-[#339989] dark:text-[#4CE3B2]">
                  {job.salary}
                </p>

                <button
                  type="button"
                  className="
                    rounded-sm bg-[#E61E25] px-6 py-2.5 md:px-8 md:py-3
                    text-base md:text-lg font-semibold text-white
                    shadow-sm hover:bg-[#cc151c]
                    transition-colors
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E61E25]
                    whitespace-nowrap
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