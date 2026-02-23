// components/sections/workforce-solutions-section.tsx
import Image from "next/image";

type Category = {
  id: string;
  title: string;
  jobsLabel: string;
  iconSrc: string;
};

const categories: Category[] = [
  {
    id: "marketing",
    title: "Marketing & Communication",
    jobsLabel: "60 Jobs Available",
    iconSrc: "/job-categories-section-01.svg",
  },
  {
    id: "design-dev",
    title: "Design & Development",
    jobsLabel: "120 Jobs Available",
    iconSrc: "/job-categories-section-02.svg",
  },
  {
    id: "hr-dev",
    title: "Human Resource & Development",
    jobsLabel: "200 Jobs Available",
    iconSrc: "/job-categories-section-03.svg",
  },
  {
    id: "finance",
    title: "Finance & Management",
    jobsLabel: "357 Jobs Available",
    iconSrc: "/job-categories-section-04.svg",
  },
  {
    id: "support",
    title: "Customer Support Care",
    jobsLabel: "450 Jobs Available",
    iconSrc: "/job-categories-section-05.svg",
  },
  {
    id: "business",
    title: "Business & Consulting",
    jobsLabel: "41 Jobs Available",
    iconSrc: "/job-categories-section-06.svg",
  },
  {
    id: "project",
    title: "Project Management",
    jobsLabel: "85 Jobs Available",
    iconSrc: "/job-categories-section-07.svg",
  },
  {
    id: "security",
    title: "Armforce Guide & Security",
    jobsLabel: "62 Jobs Available",
    iconSrc: "/job-categories-section-08.svg",
  },
  {
    id: "healthcare",
    title: "Health Care & Medical",
    jobsLabel: "52 Jobs Available",
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

        {/* Grid */}
        <div className="lc-category-grid mt-10 grid gap-x-12 gap-y-12 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.id}
              className="
                lc-category-card
                flex w-full flex-col justify-center
                rounded-[20px] px-5 py-20
                bg-white text-[#339989]
                shadow-[0_10px_30px_rgba(15,23,42,0.12)]
                transition-colors
                dark:bg-[#4B4B4B] dark:text-white
              "
              style={{
                maxWidth: 371,
                minHeight: 255,
              }}
            >
              <div className="flex items-center gap-2.5">
                <div className="shrink-0">
                  <Image
                    src={category.iconSrc}
                    alt={category.title}
                    width={90}
                    height={90}
                    className="lc-category-icon h-[90px] w-[90px] transition"
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
      </div>
    </section>
  );
}