import { redirect } from "next/navigation";
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
    <main className="bg-[#020617] flex justify-center py-24">
      <section className="w-full max-w-md rounded-3xl border border-[#D4D4D8] bg-[#020617] px-8 py-8 shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-center text-white">
          Create your Account
        </h1>

        {errorMessage && (
          <p className="mt-4 text-center text-sm text-red-500">
            {errorMessage}
          </p>
        )}

        <ServiceProviderSignupForm action={handleSignup} />
      </section>
    </main>
  );
}