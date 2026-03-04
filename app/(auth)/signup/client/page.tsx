// app/(auth)/signup/client/page.tsx
import { redirect } from "next/navigation";
import { ClientSignupForm } from "@/components/auth/client-signup-form";

export default function ClientSignupPage() {
  // Server action for the signup form
  async function signupAction(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    // TODO: real signup logic (Prisma + password hashing, etc.)
    // For now, just pretend success and send them to login.
    if (!name || !email || !password) {
      // if you want to handle errors later, you can redirect with a query:
      // redirect("/signup/client?error=missing");
    }

    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFFAFB] dark:bg-[#020617] px-4 py-16">
      <section className="w-full max-w-md rounded-[30px] border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] px-8 py-10 shadow-sm">
        {/* Heading */}
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] dark:text-white">
            Client / Company Sign Up
          </h1>
          <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA]">
            Create an account to post jobs and hire service providers.
          </p>
        </div>

        {/* Form with server action */}
        <ClientSignupForm action={signupAction} />
      </section>
    </main>
  );
}