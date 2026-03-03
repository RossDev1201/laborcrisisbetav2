import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function setRole(role: "service_provider" | "client") {
  "use server";

  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  await prisma.user.update({
    where: { email: session.user.email },
    data: { role, onboardingComplete: false },
  });

  redirect(role === "service_provider" ? "/onboarding/service-provider" : "/onboarding/client");
}

export default async function OnboardingRolePage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#020617]" />
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
        <section className="w-full max-w-[880px] rounded-[30px] border border-[#71717A] bg-[#FFFAFB] px-10 py-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-center text-black">
            Welcome! Let&apos;s get started
          </h1>
          <p className="mt-4 text-center text-lg text-black/70">
            Choose how would you like to use our platform!
          </p>

          <div className="mt-8 space-y-5">
            <form action={async () => { "use server"; await setRole("service_provider"); }}>
              <button
                className="w-full text-left flex items-center gap-6 rounded-[24px] border-2 border-[#EF4444] px-6 py-6 hover:bg-red-50/60 transition"
                type="submit"
              >
                <div className="h-12 w-12 rounded-full border border-[#EF4444]/60 flex items-center justify-center">
                  <span className="text-[#EF4444] text-xl">👤</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">Service Provider / Jobseeker</div>
                  <div className="text-base text-black/70">Find your dream job opportunity</div>
                </div>
              </button>
            </form>

            <form action={async () => { "use server"; await setRole("client"); }}>
              <button
                className="w-full text-left flex items-center gap-6 rounded-[24px] border-2 border-[#BAB9B9] px-6 py-6 hover:bg-zinc-50/80 transition"
                type="submit"
              >
                <div className="h-12 w-12 rounded-full border border-[#BAB9B9] flex items-center justify-center">
                  <span className="text-[#EF4444] text-xl">🏢</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-black">Client / Company</div>
                  <div className="text-base text-black/70">Post jobs and find exceptional talent</div>
                </div>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}