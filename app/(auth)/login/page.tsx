import { SignupRoleDialog } from "@/components/auth/signup-role-dialog";
import { LoginActions } from "@/components/auth/login-actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#FFFAFB] dark:bg-[#020617] flex justify-center pt-24 pb-16">
      {/* Auth card – Figma dimensions */}
      <section
        className="
          relative
          inline-flex
          h-[426px] px-[30px] py-[30px]
          flex-col items-start gap-6
          rounded-[30px] border border-[#71717A]
          bg-[#FFFAFB] dark:bg-[#020617] dark:border-[#3f3f46]
          shadow-sm
          w-full max-w-[520px]
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

        {/* ⬇️ Auth.js-backed buttons here */}
        <div className="w-full mt-4 space-y-4">
          <LoginActions />
        </div>

        <div className="flex-1" />

        {/* Sign up text */}
        <p className="mt-10 w-full text-center text-lg text-black dark:text-white">
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