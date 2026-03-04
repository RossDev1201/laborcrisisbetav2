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

  // Resume upload is UI-only for now. We accept the file but don't store it yet.
  // Later you’ll upload to S3/Vercel Blob/UploadThing and save resumeUrl.
  // const resume = formData.get("resume") as File | null;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, role: true },
  });

  if (!user) redirect("/login");

  // Ensure role is correct (important for first-time Google onboarding)
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
  searchParams?: { error?: string; mode?: string };
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

  const error = searchParams?.error;
  const mode = searchParams?.mode; // optional: "edit"

  const initialFullName = user.serviceProviderProfile?.fullName ?? "";
  const initialShortBio = user.serviceProviderProfile?.shortBio ?? "";

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#020617]" />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
        <form
          action={saveServiceProvider}
          className="w-full max-w-[900px] rounded-[30px] border border-[#71717A] bg-[#FFFAFB] px-10 py-10"
        >
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-black">
                {mode === "edit" ? "Update Your Profile" : "Complete Your Profile"}
              </h1>
              <p className="mt-2 text-black/60">
                Fill in your details to continue.
              </p>
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">
                Full Name
              </label>
              <input
                name="fullName"
                defaultValue={initialFullName}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black/20"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">
                Short Bio
              </label>
              <textarea
                name="shortBio"
                defaultValue={initialShortBio}
                placeholder="Tell us about yourself"
                className="mt-2 w-full min-h-[140px] rounded-xl border border-[#D4D4D8] bg-white px-4 py-3 text-black outline-none focus:ring-2 focus:ring-black/20"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">
                Resume (PDF)
              </label>
              <div className="mt-2 rounded-xl border border-[#D4D4D8] bg-white p-8 text-center">
                <div className="text-black/70">Choose a file or drag and drop</div>
                <div className="text-black/40 mt-1">Application/PDF (2MB)</div>

                <label className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#EF4F4F] px-8 py-3 text-white hover:bg-[#e03f3f] transition">
                  Choose File
                  <input
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                  />
                </label>

                <p className="mt-3 text-xs text-black/40">
                  Upload is coming next. For now, this is UI only.
                </p>
              </div>
            </div>

            {error === "missing" && (
              <p className="text-red-600">Please fill required fields.</p>
            )}

            <div className="mt-8 flex items-center justify-center gap-6">
              <Link
                href="/dashboard"
                className="min-w-[220px] rounded-xl border border-[#339989] px-10 py-3 text-center text-[#339989] hover:bg-[#339989]/10 transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="min-w-[220px] rounded-xl bg-[#EF4F4F] px-10 py-3 text-white hover:bg-[#e03f3f] transition"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}