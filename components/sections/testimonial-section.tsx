// components/sections/testimonials-section.tsx
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quoteBeforeBrand: string;
  quoteAfterBrand: string;
  avatarSrc: string;
};

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos M.",
    role: "Warehouse Supervisor",
    quoteBeforeBrand: "As someone supporting my family, time matters.",
    quoteAfterBrand:
      "connected me to an employer who needed staff immediately. I appreciate how fast everything moved.",
    avatarSrc: "/testimonial-01.webp",
  },
  {
    id: "t2",
    name: "Aisha R.",
    role: "Customer Support Specialist",
    quoteBeforeBrand: "I was looking for a stable role with growth.",
    quoteAfterBrand:
      "matched me with a company that values training and development.",
    avatarSrc: "/testimonial-02.webp",
  },
  {
    id: "t3",
    name: "Kenji S.",
    role: "Project Engineer",
    quoteBeforeBrand: "After months of searching on my own,",
    quoteAfterBrand:
      "introduced me to the right hiring manager in just a few days.",
    avatarSrc: "/testimonial-03.webp",
  },
  {
    id: "t4",
    name: "Maya L.",
    role: "Preschool Teacher",
    quoteBeforeBrand: "I wanted a job that fit my schedule and my values.",
    quoteAfterBrand:
      "helped me find a school where I feel truly supported.",
    avatarSrc: "/testimonial-04.webp",
  },
  {
    id: "t5",
    name: "Victor T.",
    role: "Events Manager",
    quoteBeforeBrand: "Events hiring can be unpredictable, but",
    quoteAfterBrand:
      "kept me updated with new roles and made every application feel easy.",
    avatarSrc: "/testimonial-05.webp",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="reviews"
      className="bg-background py-16 md:py-20 lg:py-24 dark:bg-[#111111]"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="reviews-heading"
            className="text-[26px] font-semibold leading-tight text-gray-900 md:text-[32px] dark:text-white"
          >
            <span>
              <span className="text-[#E61E25]">Reviews</span>{" "}
              <span>of People</span>
            </span>
            <br />
            <span>Who Have Found</span>
            <br />
            <span>Jobs Through Labor Crisis</span>
          </h2>
        </div>

        {/* Radios + panels + avatars */}
        <div className="lc-testimonial-wrapper mt-12 flex flex-col items-center">
          {/* Hidden radio inputs (SSR-only, no JS) */}
          {testimonials.map((t, idx) => (
            <input
              key={t.id}
              id={t.id}
              name="testimonial"
              type="radio"
              className="lc-testimonial-input sr-only"
              defaultChecked={idx === 0}
            />
          ))}

          {/* Quote panels */}
          <div className="lc-testimonial-panels relative mt-6 w-full">
            {testimonials.map((t) => (
              <figure
                key={t.id}
                className="lc-testimonial-panel mx-auto max-w-3xl rounded-[24px] bg-white px-8 py-10 text-center text-[#111111] shadow-sm"
                data-testimonial={t.id}
              >
                <blockquote className="text-[15px] leading-relaxed md:text-[17px]">
                  <p className="italic">
                    “{t.quoteBeforeBrand}{" "}
                    <span className="font-semibold text-[#E61E25]">
                      Labor Crisis
                    </span>{" "}
                    {t.quoteAfterBrand}”
                  </p>
                </blockquote>

                {/* keep figcaption but hide on mobile to match mock */}
                <figcaption className="mt-4 hidden text-sm font-medium text-gray-700 md:block dark:text-gray-200">
                  {t.name}{" "}
                  <span className="text-gray-500 dark:text-gray-400">
                    · {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Avatars: single line, selected one expands */}
          <div className="lc-testimonial-avatars mt-10 flex items-center">
            {testimonials.map((t) => (
              <label
                key={t.id}
                htmlFor={t.id}
                className="cursor-pointer"
                aria-label={t.name}
              >
                <div className="lc-testimonial-avatar-dot">
                  <Image
                    src={t.avatarSrc}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="lc-testimonial-avatar-img"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}