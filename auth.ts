import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: { strategy: "jwt" },

  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],

  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      // On initial sign-in, user is available
      if (user) {
        token.sub = user.id;
        (token as any).role = (user as any).role ?? null;
        (token as any).onboardingComplete = (user as any).onboardingComplete ?? false;
      } else if (token?.email) {
        // On subsequent requests, refresh token from DB (optional but safest)
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email as string },
          select: { id: true, role: true, onboardingComplete: true },
        });
        if (dbUser) {
          token.sub = dbUser.id;
          (token as any).role = dbUser.role;
          (token as any).onboardingComplete = dbUser.onboardingComplete;
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.sub;
        (session.user as any).role = (token as any).role ?? null;
        (session.user as any).onboardingComplete = (token as any).onboardingComplete ?? false;
      }
      return session;
    },
  },
});