// components/sections/upload-cv-section.tsx
import Image from "next/image";

export function UploadCvSection() {
  return (
    <section
      id="upload-cv"
      className="bg-background py-16 md:py-20 lg:py-24 dark:bg-[#111111]"
      aria-labelledby="upload-cv-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div
          className="
            overflow-hidden rounded-[40px] bg-[#E3423D]
            px-6 pt-10 pb-4
            min-h-[520px]
            flex flex-col justify-between
            md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-stretch
            md:px-10 md:pt-12 md:pb-8
            lg:px-16 lg:pt-16
          "
        >
          {/* TEXT COLUMN (right on desktop, top on mobile) */}
          <div className="order-1 flex flex-col justify-center md:order-2 md:pl-10 lg:pl-14">
            <h2
              id="upload-cv-heading"
              className="text-[26px] font-semibold leading-tight text-white md:text-[32px] lg:text-[36px]"
            >
              <span className="block">Upload Your Latest CV.</span>
              <span className="block">Get Matched Faster at</span>
              <span className="mt-2 block font-extrabold text-black">
                Labor Crisis
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 md:text-[15px]">
              Upload your most recent CV and let our smart matching system
              connect you with roles that fit your skills, experience, and
              availability. Whether you&apos;re actively searching or open to
              new opportunities, Labor Crisis helps employers find you—faster,
              smarter, and with less hassle.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-white
                  px-8 py-3
                  text-sm font-semibold text-white
                  shadow-sm hover:bg-white/10
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#E3423D]
                "
              >
                Upload your CV
              </button>
            </div>
          </div>

          {/* IMAGE COLUMN (left on desktop, bottom on mobile) */}
          <div
            className="
              order-2 mt-8 w-full
              flex items-end justify-center
              md:order-1 md:mt-0 md:justify-start
            "
          >
            <Image
              src="/upload-cv-section.webp"
              alt="Smiling professional pointing towards the upload CV section"
              width={520}
              height={520}
              priority
              className="
                h-91.25 w-auto object-contain object-bottom
md:h-120 lg:h-160
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}