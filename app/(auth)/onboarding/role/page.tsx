import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function chooseRole(formData: FormData) {
  "use server";

  const session = await auth();
  const email = session?.user?.email;
  if (!email) redirect("/login");

  const role = String(formData.get("role") || "");

  if (role !== "service_provider" && role !== "client") {
    redirect("/onboarding/role");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (!user) redirect("/login");

  // Save the chosen role
  await prisma.user.update({
    where: { id: user.id },
    data: { role },
  });

  // Then send them into the right onboarding flow
  if (role === "service_provider") {
    redirect("/onboarding/service-provider");
  } else {
    redirect("/onboarding/client");
  }
}

export default async function RoleOnboardingPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      onboardingComplete: true,
    },
  });

  if (!user) redirect("/login");

  // If they already finished onboarding, skip straight to dashboard
  if (user.onboardingComplete) {
    redirect("/dashboard");
  }

  return (
    <>
      {/* Dimmed background */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      <main className="min-h-screen flex items-center justify-center px-4 py-10">
        {/* Modal */}
        <section className="relative w-full max-w-md rounded-[32px] bg-[#FFFAFB] dark:bg-[#18181B] px-8 py-8 shadow-xl">
          {/* Close button (optional – you can wire it to go home/login) */}
          <form
            action={async () => {
              "use server";
              redirect("/");
            }}
          >
            <button
              type="submit"
              aria-label="Close"
              className="absolute right-5 top-5 text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition"
            >
              ×
            </button>
          </form>

          {/* Heading */}
          <div className="text-center space-y-2 mt-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] dark:text-white">
              Welcome! Let&apos;s get started
            </h1>
            <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA]">
              Choose how would you like to use our platform!
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {/* Service Provider / Jobseeker */}
            <form action={chooseRole}>
              <input type="hidden" name="role" value="service_provider" />
              <button
                type="submit"
                className="
                  w-full rounded-[24px] border-2
                  border-[#EF4444] bg-white
                  dark:bg-[#09090B] dark:border-[#EF4444]
                  px-5 py-4 text-left
                  flex items-center gap-4
                  hover:bg-[#FFF5F5] dark:hover:bg-[#1F1F23]
                  transition
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EF4444] text-[#EF4444]">
                  {/* simple user icon */}
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827] dark:text-white">
                    Service Provider / Jobseeker
                  </div>
                  <div className="text-xs text-[#6B7280] dark:text-[#A1A1AA]">
                    Find your dream job opportunity
                  </div>
                </div>
              </button>
            </form>

            {/* Client / Company */}
            <form action={chooseRole}>
              <input type="hidden" name="role" value="client" />
              <button
                type="submit"
                className="
                  w-full rounded-[24px] border
                  border-[#E5E7EB] bg-white
                  dark:bg-[#09090B] dark:border-[#3F3F46]
                  px-5 py-4 text-left
                  flex items-center gap-4
                  hover:border-[#EF4444] hover:bg-[#FFF5F5]
                  dark:hover:border-[#EF4444] dark:hover:bg-[#1F1F23]
                  transition
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4D4D8] text-[#EF4444]">
                  {/* simple building icon */}
                  <span className="text-lg">🏢</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827] dark:text-white">
                    Client / Company
                  </div>
                  <div className="text-xs text-[#6B7280] dark:text-[#A1A1AA]">
                    Post jobs and find exceptional talent
                  </div>
                </div>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}