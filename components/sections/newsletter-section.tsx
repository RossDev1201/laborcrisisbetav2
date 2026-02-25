// components/sections/newsletter-section.tsx
export function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="bg-background py-16 md:py-20 lg:py-24 dark:bg-[#111111]"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div
          className="
            flex flex-col gap-6
            rounded-[40px] bg-[#CFEFE7]
            px-8 py-10
            md:flex-row md:items-center md:justify-between
            md:px-12 md:py-12
            lg:px-16 lg:py-14
          "
        >
          {/* Text */}
          <div className="max-w-xl">
            <h2
              id="newsletter-heading"
              className="text-2xl font-semibold leading-tight text-gray-900 md:text-[28px] lg:text-[32px]"
            >
              <span className="block">Never Want to Miss</span>
              <span className="block">Any Job News?</span>
            </h2>
          </div>

          {/* Form */}
          <form
            action="/newsletter" // you can change this when you wire backend
            method="POST"
            className="
              w-full max-w-xl
              md:flex md:items-center md:justify-end md:gap-4
            "
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter Email Address"
                className="
                  w-full flex-1
                  rounded-sm border border-transparent
                  bg-white px-5 py-3
                  text-sm md:text-base
                  text-gray-900 placeholder:text-gray-400
                  shadow-sm
                  focus:border-[#E61E25] focus:outline-none focus:ring-2 focus:ring-[#E61E25]/60
                "
              />

              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  rounded-sm bg-[#E61E25]
                  px-8 py-3
                  text-sm font-semibold text-white
                  shadow-sm
                  hover:bg-[#cc151c]
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[#E61E25]
                "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}