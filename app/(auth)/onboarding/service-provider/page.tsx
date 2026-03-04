// app/(auth)/onboarding/service-provider/page.tsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function saveServiceProvider(formData: FormData) {
  "use server";

  const session = await auth();
  const email = session?.user?.email;
  if (!email) redirect("/login");

  const fullName = String(formData.get("fullName") || "").trim();
  const shortBio = String(formData.get("shortBio") || "").trim();

  if (!fullName || !shortBio) {
    redirect("/onboarding/service-provider?error=missing");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, role: true },
  });

  if (!user) redirect("/login");

  // Ensure role is service_provider
  if (user.role !== "service_provider") {
    await prisma.user.update({
      where: { id: user.id },
      data: { role: "service_provider" },
    });
  }

  await prisma.serviceProviderProfile.upsert({
    where: { userId: user.id },
    create: { userId: user.id, fullName, shortBio },
    update: { fullName, shortBio },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { onboardingComplete: true },
  });

  redirect("/dashboard");
}

export default async function ServiceProviderOnboardingPage({
  searchParams,
}: {
  // ✅ Next 15: searchParams is a Promise of a generic record
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      serviceProviderProfile: { select: { fullName: true, shortBio: true } },
    },
  });

  if (!user) redirect("/login");

  // ✅ Await the promise and safely pull "error" if present
  const sp = await searchParams;
  const error =
    typeof sp.error === "string" ? sp.error : Array.isArray(sp.error) ? sp.error[0] : undefined;
  // "mode" is optional – if you ever need it, same pattern:
  const mode =
    typeof sp.mode === "string" ? sp.mode : Array.isArray(sp.mode) ? sp.mode[0] : undefined;

  const initialFullName = user.serviceProviderProfile?.fullName ?? "";
  const initialShortBio = user.serviceProviderProfile?.shortBio ?? "";

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[#FFFAFB] dark:bg-[#020617]" />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
        <section className="w-full max-w-[640px] rounded-[30px] border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] px-10 py-10 shadow-sm">
          {/* Logo (swap with real logo if you want) */}
          <div className="flex justify-center mb-8">
            <span className="text-3xl font-bold text-[#EF4F4F]">LC</span>
          </div>

          <form action={saveServiceProvider} className="space-y-6">
            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] dark:text-white">
                {mode === "edit"
                  ? "Update Your Profile"
                  : "Complete Your Profile"}
              </h1>
              <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA]">
                Tell us a bit about yourself so we can match you with the best
                job opportunities.
              </p>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Full Name
              </label>
              <input
                name="fullName"
                defaultValue={initialFullName}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
                required
              />
            </div>

            {/* Short Bio */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Short Bio
              </label>
              <textarea
                name="shortBio"
                defaultValue={initialShortBio}
                placeholder="Tell us about yourself"
                className="mt-2 w-full min-h-[140px] rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
                required
              />
            </div>

            {/* Resume upload (UI only) */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Resume (PDF)
              </label>
              <div className="mt-2 rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-[#F9FAFB] dark:bg-[#09090B] p-8 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-[#D4D4D8] dark:border-[#3F3F46]">
                  <span className="text-2xl text-[#6B7280] dark:text-[#A1A1AA]">
                    ⬆
                  </span>
                </div>
                <div className="text-sm text-[#4B5563] dark:text-[#E5E7EB]">
                  Choose a file or drag and drop
                </div>
                <div className="mt-1 text-xs text-[#9CA3AF] dark:text-[#A1A1AA]">
                  Application/PDF (2MB)
                </div>

                <label className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#EF4F4F] px-8 py-3 text-sm font-medium text-white hover:bg-[#e03f3f] transition">
                  Choose File
                  <input
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                  />
                </label>

                <p className="mt-3 text-xs text-[#9CA3AF] dark:text-[#A1A1AA]">
                  Upload functionality is coming soon. For now, this is UI only.
                </p>
              </div>
            </div>

            {error === "missing" && (
              <p className="text-sm text-red-600">
                Please fill in all required fields.
              </p>
            )}

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <Link
                href="/dashboard"
                className="min-w-[160px] rounded-xl border border-[#339989] px-8 py-3 text-center text-sm font-medium text-[#339989] hover:bg-[#339989]/10 transition"
              >
                Cancel
              </Link>

            <button
              type="submit"
              className="min-w-[160px] rounded-xl bg-[#EF4F4F] px-8 py-3 text-sm font-medium text-white hover:bg-[#e03f3f] transition"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </main>
  </>
  );
}