// components/sections/company-sponsors-section.tsx
import Image from "next/image";

const sponsorLogos = [
  { src: "/client-01.svg", alt: "client-01" },
  { src: "/client-02.svg", alt: "client-02" },
  { src: "/client-03.svg", alt: "client-03" },
  { src: "/client-04.svg", alt: "client-04" },
  { src: "/client-05.svg", alt: "client-05" },
  { src: "/client-06.svg", alt: "client-06" },
  { src: "/client-07.svg", alt: "client-07" },
  { src: "/client-08.svg", alt: "client-08" },
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
            More than 5,000 Clients with us
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