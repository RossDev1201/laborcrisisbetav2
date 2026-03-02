export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      {/* Card */}
      <section
        className="
          w-full max-w-[520px]
          rounded-[30px]
          border border-[#71717A]
          bg-[#FFFAFB] dark:bg-[#020617]
          overflow-hidden
          shadow-sm
        "
      >
        {/* Message area */}
        <div className="px-10 py-10 bg-[#FFFAFB] dark:bg-[#020617]">
          <p className="text-center text-xl md:text-2xl text-black dark:text-white">
            An email with verification link was sent to your email address.
          </p>
        </div>

        {/* Footer with button */}
        <div className="bg-[#E5E7EB] dark:bg-[#020617] px-10 py-6 flex justify-center">
          <a
            href="/login"
            className="
              inline-flex items-center justify-center
              rounded-[12px]
              px-12 py-3
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
  );
}