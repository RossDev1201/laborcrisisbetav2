import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

async function saveClient(formData: FormData) {
  "use server";

  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const companyName = String(formData.get("companyName") || "").trim();
  if (!companyName) redirect("/onboarding/client?error=missing");

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) redirect("/login");

  await prisma.clientProfile.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      companyName,
      companyLocation: String(formData.get("companyLocation") || "").trim() || null,
      companyAddress: String(formData.get("companyAddress") || "").trim() || null,
      website: String(formData.get("website") || "").trim() || null,
      facebook: String(formData.get("facebook") || "").trim() || null,
      instagram: String(formData.get("instagram") || "").trim() || null,
      youtube: String(formData.get("youtube") || "").trim() || null,
      linkedin: String(formData.get("linkedin") || "").trim() || null,
    },
    update: {
      companyName,
      companyLocation: String(formData.get("companyLocation") || "").trim() || null,
      companyAddress: String(formData.get("companyAddress") || "").trim() || null,
      website: String(formData.get("website") || "").trim() || null,
      facebook: String(formData.get("facebook") || "").trim() || null,
      instagram: String(formData.get("instagram") || "").trim() || null,
      youtube: String(formData.get("youtube") || "").trim() || null,
      linkedin: String(formData.get("linkedin") || "").trim() || null,
    },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: { onboardingComplete: true },
  });

  redirect("/dashboard");
}

export default function ClientOnboardingPage({
  searchParams,
}: { searchParams?: { error?: string } }) {
  const error = searchParams?.error;

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#020617]" />
      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
        <form
          action={saveClient}
          className="w-full max-w-[1100px] rounded-[30px] border border-[#71717A] bg-[#FFFAFB] px-10 py-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <label className="block text-lg font-semibold text-black">Client/Company Name</label>
              <input
                name="companyName"
                placeholder="Enter Client/Company name"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">Company Location</label>
              <input
                name="companyLocation"
                placeholder="Select location"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">Website</label>
              <input
                name="website"
                placeholder="https://yourcompany.com"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">Company Address</label>
              <input
                name="companyAddress"
                placeholder="Enter address (unit, bldg., street...)"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">Facebook</label>
              <input
                name="facebook"
                placeholder="https://www.facebook.com/yourcompany"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">YouTube</label>
              <input
                name="youtube"
                placeholder="https://www.youtube.com/@yourcompany"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">Instagram</label>
              <input
                name="instagram"
                placeholder="https://www.instagram.com/yourcompany"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-black">LinkedIn</label>
              <input
                name="linkedin"
                placeholder="www.linkedin.com/company/yourcompany"
                className="mt-2 w-full rounded-xl border border-[#D4D4D8] px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-10">
            <label className="block text-lg font-semibold text-black">Company Logo</label>
            <div className="mt-2 rounded-xl border border-[#D4D4D8] bg-white p-8 text-center">
              <div className="text-black/70">Choose a file or drag and drop</div>
              <div className="text-black/40 mt-1">Image (2MB)</div>
              <label className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#EF4F4F] px-8 py-3 text-white">
                Choose File
                <input name="logo" type="file" accept="image/*" className="hidden" />
              </label>
            </div>
          </div>

          {error === "missing" && (
            <p className="mt-4 text-center text-red-600">Please fill required fields.</p>
          )}

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="/dashboard"
              className="min-w-[220px] rounded-xl border border-[#339989] px-10 py-3 text-center text-[#339989]"
            >
              Cancel
            </a>

            <button
              type="submit"
              className="min-w-[220px] rounded-xl bg-[#EF4F4F] px-10 py-3 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </main>
    </>
  );
}