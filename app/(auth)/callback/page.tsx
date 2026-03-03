import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function AuthCallbackPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { serviceProviderProfile: true, clientProfile: true },
  });

  if (!user) redirect("/login");

  // 1) No role picked yet
  if (!user.role) redirect("/onboarding/role");

  // 2) Role picked but profile not completed
  if (user.role === "service_provider") {
    if (!user.serviceProviderProfile || !user.onboardingComplete) {
      redirect("/onboarding/service-provider");
    }
  }

  if (user.role === "client") {
    if (!user.clientProfile || !user.onboardingComplete) {
      redirect("/onboarding/client");
    }
  }

  // 3) Done → dashboard
  redirect("/dashboard");
}