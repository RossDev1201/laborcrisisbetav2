export default function VerifyEmailPage() {
  return (
    <>
      {/* Full-bleed background behind everything */}
      <div className="fixed inset-0 -z-10 bg-[#020617]" />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
        <section
          className="
            w-full max-w-[760px]
            rounded-[30px]
            overflow-hidden
            border border-[#71717A]
            bg-[#FFFAFB]
            shadow-sm
          "
        >
          {/* Message */}
          <div className="px-10 py-12">
            <p className="text-center text-xl md:text-2xl text-black">
              An email with verification link was sent to your email address.
            </p>
          </div>

          {/* Footer */}
          <div className="bg-[#E5E7EB] px-10 py-8 flex justify-center">
            <a
              href="/login"
              className="
                inline-flex items-center justify-center
                rounded-[12px]
                px-16 py-4
                text-lg font-medium
                bg-[#EF4F4F] hover:bg-[#e03f3f]
                text-white
                transition
              "
            >
              Ok
            </a>
          </div>
        </section>
      </main>
    </>
  );
}