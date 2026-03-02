import Image from "next/image";
import { technopile } from "../fonts";
import { SignupRoleDialog } from "@/components/auth/signup-role-dialog";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FFFAFB] dark:bg-[#020617] flex flex-col items-center">
      {/* Brand header (non-clickable) */}
      <header className="mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <Image
            src="/labor-crisis-logo-01.svg"
            alt="Labor Crisis logo"
            width={60}
            height={60}
            className="h-10 w-auto md:h-12"
            priority
          />

          <span
            className={`
              ${technopile.className}
              text-[24px] md:text-[28px] lg:text-[32px]
              tracking-[0.2em]
              leading-none
              text-black dark:text-white
              relative -translate-y-[4px]
            `}
          >
            LABOR CRISIS
          </span>
        </div>
      </header>

      {/* Auth card – Figma dimensions */}
      <section
        className="
          mt-16
          inline-flex h-106.5 p-7.5 px-5
          flex-col items-start gap-6
          rounded-[30px] border border-[#71717A]
          bg-[#FFFAFB] dark:bg-[#020617] dark:border-[#3f3f46]
          shadow-sm
          w-full max-w-130
        "
      >
        {/* Close button (optional) */}
        <button
          type="button"
          aria-label="Close"
          className="absolute right-5 top-5 text-[#BAB9B9] hover:text-black dark:hover:text-white transition"
        >
          ×
        </button>

        {/* Heading */}
        <div className="w-full text-center mt-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
            Welcome Back
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#000000] dark:text-[#BAB9B9]">
            Login with your Email or Google Account
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full mt-4 space-y-4">
          {/* Email button */}
          <button
            type="button"
            className="
              w-full rounded-[10px]
              border border-[#BAB9B9] dark:border-[#3f3f46]
              bg-transparent
              px-6 py-4
              text-lg text-black dark:text-white
              hover:bg-black/5 dark:hover:bg-white/5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              transition
            "
          >
            Login with Email Address
          </button>

          {/* Google button */}
          <button
            type="button"
            className="
              flex w-full items-center justify-center gap-3
              rounded-[10px]
              border border-[#BAB9B9] dark:border-[#3f3f46]
              bg-transparent
              px-6 py-4
              text-lg text-black dark:text-white
              hover:bg-black/5 dark:hover:bg-white/5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              transition
            "
          >
            <Image
              src="/google-logo.svg"   // <-- point to your actual Google icon asset
              alt="Google logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span>Login with Google</span>
          </button>
        </div>

        {/* Spacer to push footer-ish text towards bottom while respecting 426px height */}
        <div className="flex-1" />

        {/* Sign up text */}
        <p className="mt-10 text-center text-lg text-black dark:text-white">
  Don&apos;t have an account yet?{" "}
  <SignupRoleDialog>
    <button
      type="button"
      className="font-semibold text-[#339989] hover:underline"
    >
      Sign Up
    </button>
  </SignupRoleDialog>
</p>
      </section>
    </main>
  );
}