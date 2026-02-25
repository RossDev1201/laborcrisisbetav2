// components/layout/section-nav.tsx
import type { ReactNode } from "react";

type NavItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  { id: "top", label: "Back to top", icon: <ArrowUpIcon /> },
  { id: "hero", label: "Hero section", icon: <BoltIcon /> },
  {
    id: "workforce-solutions",
    label: "Workforce solutions",
    icon: <FlagIcon />,
  },
  { id: "featured-jobs", label: "Featured jobs", icon: <CardsIcon /> },
  { id: "reviews", label: "Reviews", icon: <StepsIcon /> },
  { id: "upload-cv", label: "Upload CV", icon: <MailIcon /> },

  // 🔴 THIS is the sponsors section – must match <section id="company-sponsors">
  {
    id: "company-sponsors",
    label: "Sponsors",
    icon: <GlobeIcon />,
  },

  { id: "newsletter", label: "Newsletter", icon: <MailIcon /> },
];

export function SectionNav() {
  return (
    <nav
      aria-label="Page sections"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex"
    >
      {navItems.map((item) => {
        const href = item.id === "top" ? "#top" : `#${item.id}`;

        return (
          <a
            key={item.id}
            href={href}
            className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-colors hover:bg-[#E61E25] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E61E25]"
          >
            <span className="sr-only">{item.label}</span>
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center"
            >
              {item.icon}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

/* --- Tiny inline SVG icons --- */

const iconBase =
  "h-4 w-4 stroke-[1.6] stroke-current text-gray-700 group-hover:text-white";

function ArrowUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={iconBase}
      fill="none"
    >
      <path d="M8 13V3" />
      <path d="M4.5 6.5 8 3l3.5 3.5" />
    </svg>
  );
}

function BoltIcon() {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className={iconBase}
        fill="none"
      >
        <path d="M7 2 4 8h3v6l3-6H7z" />
      </svg>
  );
}

function FlagIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={iconBase}
      fill="none"
    >
      <path d="M4 2v12" />
      <path d="M5 3h5.2L11 7H5z" />
    </svg>
  );
}

function CardsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={iconBase}
      fill="none"
    >
      <rect x="3" y="4" width="7" height="8" rx="1" />
      <path d="M6.5 4.5 11 4v5.5" />
    </svg>
  );
}

function StepsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={iconBase}
      fill="none"
    >
      <path d="M3 11h3v2H3z" />
      <path d="M6 8h3v3H6z" />
      <path d="M9 5h4v3H9z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={iconBase}
      fill="none"
    >
      <circle cx="8" cy="8" r="4.5" />
      <path d="M8 3.5v9" />
      <path d="M4 8h8" />
      <path d="M5.2 4.2c.7.7 1.3 1.9 1.3 3.8s-.6 3.1-1.3 3.8" />
      <path d="M10.8 4.2c-.7.7-1.3 1.9-1.3 3.8s.6 3.1 1.3 3.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={iconBase}
      fill="none"
    >
      <rect x="3" y="4" width="10" height="8" rx="1.5" />
      <path d="m4 5.5 4 3 4-3" />
    </svg>
  );
}