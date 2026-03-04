// app/(auth)/signup/service-provider/page.tsx
import { redirect } from "next/navigation";
import { ServiceProviderSignupForm } from "@/components/auth/service-provider-signup-form";

export default function ServiceProviderSignupPage() {
  // Server action for the signup form
  async function signupAction(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    // TODO: real signup logic (Prisma + password hashing, etc.)
    if (!name || !email || !password) {
      // Later you can redirect with error query if you want:
      // redirect("/signup/service-provider?error=missing");
    }

    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFFAFB] dark:bg-[#020617] px-4 py-16">
      <section className="w-full max-w-md rounded-[30px] border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] px-8 py-10 shadow-sm">
        {/* Heading */}
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] dark:text-white">
            Service Provider Sign Up
          </h1>
          <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA]">
            Create an account to find jobs and connect with clients.
          </p>
        </div>

        {/* Form with server action */}
        <ServiceProviderSignupForm action={signupAction} />
      </section>
    </main>
  );
}