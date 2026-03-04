// app/(auth)/callback/page.tsx
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function AuthCallbackPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      onboardingComplete: true,
    },
  });

  if (!user) redirect("/login");

  // If onboarding is not complete, ALWAYS go to the role chooser first
  if (!user.onboardingComplete) {
    redirect("/onboarding/role");
  }

  // Already onboarded → dashboard
  redirect("/dashboard");
}