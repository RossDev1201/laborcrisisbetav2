// app/signup/service-provider/page.tsx
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { technopile } from "../../fonts";
import { Button } from "@/components/ui/button";
import { ServiceProviderSignupForm } from "@/components/auth/service-provider-signup-form";

async function handleSignup(formData: FormData) {
  "use server";

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (!name || !email || !password || !confirmPassword) {
    redirect("/signup/service-provider?error=missing_fields");
  }

  if (password !== confirmPassword) {
    redirect("/signup/service-provider?error=password_mismatch");
  }

  if (password.length < 8) {
    redirect("/signup/service-provider?error=password_too_short");
  }

  // TODO: create user, hash password, etc.

  redirect("/login?signup=success");
}

export default function ServiceProviderSignupPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  const errorCode = searchParams?.error;
  let errorMessage: string | null = null;

  if (errorCode === "missing_fields") {
    errorMessage = "Please fill in all the fields.";
  } else if (errorCode === "password_mismatch") {
    errorMessage = "Passwords do not match.";
  } else if (errorCode === "password_too_short") {
    errorMessage = "Password must be at least 8 characters.";
  }

  return (
    <main className="min-h-screen bg-[#FFFAFB] dark:bg-[#020617] flex flex-col items-center">
      {/* Brand header */}
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

      {/* Signup card */}
      <section className="mt-12 w-full max-w-md rounded-[16px] border border-[#D4D4D8] bg-white dark:bg-zinc-950 px-8 py-10 shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-center text-black dark:text-white">
          Create your Account
        </h1>

        {errorMessage && (
          <p className="mt-4 text-center text-sm text-red-500">
            {errorMessage}
          </p>
        )}

        {/* Client-side form component, but uses server action */}
        <ServiceProviderSignupForm action={handleSignup} />
      </section>
    </main>
  );
}