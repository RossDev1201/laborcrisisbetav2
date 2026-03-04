import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function saveClient(formData: FormData) {
  "use server";

  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const email = session.user.email;

  const companyName = String(formData.get("companyName") || "").trim();
  const companyLocation = String(formData.get("companyLocation") || "").trim();
  const companyAddress = String(formData.get("companyAddress") || "").trim();
  const website = String(formData.get("website") || "").trim();
  const facebook = String(formData.get("facebook") || "").trim();
  const instagram = String(formData.get("instagram") || "").trim();
  const youtube = String(formData.get("youtube") || "").trim();
  const linkedin = String(formData.get("linkedin") || "").trim();

  if (!companyName) {
    redirect("/onboarding/client?error=missing");
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, role: true },
  });

  if (!user) redirect("/login");

  // Make sure this user is marked as client
  if (user.role !== "client") {
    await prisma.user.update({
      where: { id: user.id },
      data: { role: "client" },
    });
  }

  await prisma.clientProfile.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      companyName,
      companyLocation: companyLocation || null,
      companyAddress: companyAddress || null,
      website: website || null,
      facebook: facebook || null,
      instagram: instagram || null,
      youtube: youtube || null,
      linkedin: linkedin || null,
      logoUrl: null, // TODO: set when you wire uploads
    },
    update: {
      companyName,
      companyLocation: companyLocation || null,
      companyAddress: companyAddress || null,
      website: website || null,
      facebook: facebook || null,
      instagram: instagram || null,
      youtube: youtube || null,
      linkedin: linkedin || null,
    },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { onboardingComplete: true },
  });

  redirect("/dashboard");
}

export default async function ClientOnboardingPage({
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
      clientProfile: {
        select: {
          companyName: true,
          companyLocation: true,
          companyAddress: true,
          website: true,
          facebook: true,
          instagram: true,
          youtube: true,
          linkedin: true,
        },
      },
    },
  });

  if (!user) redirect("/login");

  const error = searchParams?.error;
  const mode = searchParams?.mode;

  const initial = user.clientProfile;

  const initialCompanyName = initial?.companyName ?? "";
  const initialCompanyLocation = initial?.companyLocation ?? "";
  const initialCompanyAddress = initial?.companyAddress ?? "";
  const initialWebsite = initial?.website ?? "";
  const initialFacebook = initial?.facebook ?? "";
  const initialInstagram = initial?.instagram ?? "";
  const initialYoutube = initial?.youtube ?? "";
  const initialLinkedin = initial?.linkedin ?? "";

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[#FFFAFB] dark:bg-[#020617]" />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
        <form
          action={saveClient}
          className="w-full max-w-[1100px] rounded-[30px] border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] px-10 py-10 shadow-sm"
        >
          {/* Header */}
          <div className="mb-8 space-y-2 text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#111827] dark:text-white">
              {mode === "edit"
                ? "Update Client / Company Profile"
                : "Complete Client / Company Profile"}
            </h1>
            <p className="text-sm md:text-base text-[#6B7280] dark:text-[#A1A1AA]">
              Fill in your company details so we can match you with the right
              talent.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Client/Company Name
              </label>
              <input
                name="companyName"
                defaultValue={initialCompanyName}
                placeholder="Enter Client/Company name"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Company Location
              </label>
              <input
                name="companyLocation"
                defaultValue={initialCompanyLocation}
                placeholder="Select location"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Website
              </label>
              <input
                name="website"
                defaultValue={initialWebsite}
                placeholder="https://yourcompany.com"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Company Address
              </label>
              <input
                name="companyAddress"
                defaultValue={initialCompanyAddress}
                placeholder="Enter address (unit, bldg., street...)"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Facebook
              </label>
              <input
                name="facebook"
                defaultValue={initialFacebook}
                placeholder="https://www.facebook.com/yourcompany"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                YouTube
              </label>
              <input
                name="youtube"
                defaultValue={initialYoutube}
                placeholder="https://www.youtube.com/@yourcompany"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                Instagram
              </label>
              <input
                name="instagram"
                defaultValue={initialInstagram}
                placeholder="https://www.instagram.com/yourcompany"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-white">
                LinkedIn
              </label>
              <input
                name="linkedin"
                defaultValue={initialLinkedin}
                placeholder="www.linkedin.com/company/yourcompany"
                className="mt-2 w-full rounded-xl border border-[#E4E4E7] dark:border-[#3F3F46] bg-white dark:bg-[#09090B] px-4 py-3 text-sm text-[#111827] dark:text-white outline-none focus:ring-2 focus:ring-[#EF4F4F]/30"
              />
            </div>
          </div>

          {/* Logo upload */}
          <div className="mt-10">
            <label className="block text-sm font-medium text-[#111827] dark:text-white">
              Company Logo
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
                Image (2MB)
              </div>

              <label className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#EF4F4F] px-8 py-3 text-sm font-medium text-white hover:bg-[#e03f3f] transition">
                Choose File
                <input
                  name="logo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>

              <p className="mt-3 text-xs text-[#9CA3AF] dark:text-[#A1A1AA]">
                Upload functionality is coming soon. For now, this is UI only.
              </p>
            </div>
          </div>

          {error === "missing" && (
            <p className="mt-4 text-center text-sm text-red-600">
              Please fill required fields.
            </p>
          )}

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/dashboard"
              className="min-w-[220px] rounded-xl border border-[#339989] px-10 py-3 text-center text-sm font-medium text-[#339989] hover:bg-[#339989]/10 transition"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="min-w-[220px] rounded-xl bg-[#EF4F4F] px-10 py-3 text-sm font-medium text-white hover:bg-[#e03f3f] transition"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}