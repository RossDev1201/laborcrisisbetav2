// components/sections/workforce-solutions-section.tsx
import Image from "next/image";

type Category = {
  id: string;
  title: string;
  titleMobile: string;
  jobsLabel: string;
  jobCount: string;
  iconSrc: string;
};

const categories: Category[] = [
  {
    id: "marketing",
    title: "Marketing & Communication",
    titleMobile: "Marketing &\nCommunication",
    jobsLabel: "60 Jobs Available",
    jobCount: "60",
    iconSrc: "/job-categories-section-01.svg",
  },
  {
    id: "design-dev",
    title: "Design & Development",
    titleMobile: "Design &\nDevelopment",
    jobsLabel: "120 Jobs Available",
    jobCount: "120",
    iconSrc: "/job-categories-section-02.svg",
  },
  {
    id: "hr-dev",
    title: "Human Resource & Development",
    titleMobile: "Human resource &\nDevelopment",
    jobsLabel: "200 Jobs Available",
    jobCount: "200",
    iconSrc: "/job-categories-section-03.svg",
  },
  {
    id: "finance",
    title: "Finance & Management",
    titleMobile: "Finance & Management",
    jobsLabel: "357 Jobs Available",
    jobCount: "357",
    iconSrc: "/job-categories-section-04.svg",
  },
  {
    id: "support",
    title: "Customer Support Care",
    titleMobile: "Customer\nSupport Care",
    jobsLabel: "450 Jobs Available",
    jobCount: "450",
    iconSrc: "/job-categories-section-05.svg",
  },
  {
    id: "business",
    title: "Business & Consulting",
    titleMobile: "Business\nConsulting",
    jobsLabel: "41 Jobs Available",
    jobCount: "41",
    iconSrc: "/job-categories-section-06.svg",
  },
  {
    id: "project",
    title: "Project Management",
    titleMobile: "Project Management",
    jobsLabel: "85 Jobs Available",
    jobCount: "85",
    iconSrc: "/job-categories-section-07.svg",
  },
  {
    id: "security",
    title: "Armforce Guide & Security",
    titleMobile: "Armforce Guide & security",
    jobsLabel: "62 Jobs Available",
    jobCount: "62",
    iconSrc: "/job-categories-section-08.svg",
  },
  {
    id: "healthcare",
    title: "Health Care & Medical",
    titleMobile: "Health care\n& medical",
    jobsLabel: "52 Jobs Available",
    jobCount: "52",
    iconSrc: "/job-categories-section-09.svg",
  },
];

export function WorkforceSolutionsSection() {
  return (
    <section
      id="workforce-solutions"
      className="bg-[#e5e7eb] py-16 md:py-20 lg:py-24 dark:bg-[#111111]"
      aria-labelledby="workforce-solutions-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="workforce-solutions-heading"
            className="text-[24px] font-semibold leading-tight text-gray-900 md:text-[28px] lg:text-[32px] dark:text-white"
          >
            Fast, Focused{" "}
            <span className="text-[#E61E25]">Workforce Solutions</span>
          </h2>
        </div>

        {/* Desktop Grid - hidden on mobile */}
        <div className="lc-category-grid mt-10 hidden md:grid gap-y-8 md:mt-12 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              className="
                lc-category-card
                flex w-full flex-col justify-center
                rounded-[20px] px-5 py-20
                min-h-[255px]
                bg-white text-gray-900
                shadow-[0_10px_30px_rgba(15,23,42,0.12)]
                transition-colors
                dark:bg-[#4B4B4B] dark:text-white
              "
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Image
                    src={category.iconSrc}
                    alt={category.title}
                    width={90}
                    height={90}
                    className="lc-category-icon h-[90px] w-[90px]"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-[15px] font-semibold leading-snug md:text-[16px] lg:text-[17px]">
                    {category.title}
                  </h3>
                  <p className="lc-category-meta mt-2 text-[11px] text-gray-500 md:text-[12px] dark:text-gray-200">
                    {category.jobsLabel}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Grid - 3 columns, visible only on mobile */}
        <div className="lc-category-grid mt-[50px] grid grid-cols-3 gap-x-[10px] gap-y-0 md:hidden">
          {categories.map((category) => (
            <article
              key={category.id}
              className="lc-category-card relative flex flex-col items-center mb-[20px] rounded-[20px] w-[100px] h-[100px] bg-[#eee] transition-colors dark:bg-[#1a1a1a]"
            >
              {/* Icon Container */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[20px]">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={category.iconSrc}
                    alt={category.title}
                    width={60}
                    height={60}
                    className="lc-category-icon w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Job Count Badge */}
              <div className="absolute top-0 right-0 translate-x-[6px] -translate-y-[6px]">
                <div className="bg-[#339989] rounded-full w-[27px] h-[27px] flex items-center justify-center">
                  <p className="font-['Inter'] font-semibold text-[10px] leading-normal text-white">
                    {category.jobCount}
                  </p>
                </div>
              </div>

              {/* Title - outside the card */}
              <div className="absolute top-[105px] flex flex-col items-center w-full">
                <p className="lc-category-meta font-['Inter'] font-medium text-[10px] leading-normal text-[#3d3737] text-center capitalize whitespace-pre-line dark:text-white">
                  {category.titleMobile}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}