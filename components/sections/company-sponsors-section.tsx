// components/sections/company-sponsors-section.tsx
import Image from "next/image";

const sponsorLogos = [
  { src: "/Agoda_logo.svg", alt: "Agoda" },
  { src: "/Antler_logo.svg", alt: "Antler" },
  { src: "/BandLab_Technologies_Logo.svg", alt: "BandLab Technologies" },
  { src: "/BreadTalk_logo.svg", alt: "BreadTalk" },
  { src: "/Camella_Homes_logo.svg", alt: "Camella Homes" },
  { src: "/CapitaLand_Logo.svg", alt: "CapitaLand" },
  { src: "/Grab_Logo.svg", alt: "Grab" },
  { src: "/Horizon_Fuel_Cell_Technologies.svg", alt: "Horizon Fuel Cell Technologies" },
  { src: "/Nestle_logo.svg", alt: "Nestlé" },
  { src: "/Paymaya_logo.svg", alt: "PayMaya" },
  { src: "/San_Miguel_Corporation_logo.svg", alt: "San Miguel Corporation" },
];

// If your files are .png instead, just replace `.svg` with `.png` in all src values above.

export function CompanySponsorsSection() {
  // Duplicate logos so the marquee loops smoothly
  const marqueeItems = [...sponsorLogos, ...sponsorLogos];

  return (
    <section
      id="company-sponsors"
      className="bg-background py-16 md:py-20 lg:py-24 dark:bg-[#111111]"
      aria-labelledby="company-sponsors-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="company-sponsors-heading"
            className="text-[24px] font-semibold leading-tight text-gray-900 md:text-[28px] lg:text-[32px] dark:text-white"
          >
            More than 5,000 companies sponsorship with us
          </h2>
        </div>

        {/* Marquee rows */}
        <div className="mt-10 space-y-10 md:mt-12">
          {/* Top row → moves to the right */}
          <div className="lc-marquee-row lc-marquee-row--right">
            <div className="lc-marquee-track">
              {marqueeItems.map((logo, index) => (
                <div key={`top-${index}`} className="lc-marquee-item">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={60}
                    className="h-auto w-[150px] md:w-[180px] opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row → moves to the left */}
          <div className="lc-marquee-row lc-marquee-row--left">
            <div className="lc-marquee-track lc-marquee-track--reverse">
              {marqueeItems.map((logo, index) => (
                <div key={`bottom-${index}`} className="lc-marquee-item">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={60}
                    className="h-auto w-[150px] md:w-[180px] opacity-60"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}