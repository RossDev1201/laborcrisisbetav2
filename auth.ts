// auth.ts
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

// This wires up Auth.js (NextAuth v5) with Prisma + Google
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,

  // We’re using the Session + Session model in Prisma
  session: {
    strategy: "database",
  },

  // Needed on Vercel / behind proxies so Auth.js trusts the host header
  trustHost: true,

  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],

  pages: {
    // Use your custom login page (app/(auth)/login/page.tsx)
    signIn: "/login",
  },

  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        // Attach extra fields from Prisma User to the session
        // so you can use them in the app (e.g. in components)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - we know these fields exist on our User model
        session.user.id = user.id
        // @ts-ignore
        session.user.role = user.role
        // @ts-ignore
        session.user.onboardingComplete = user.onboardingComplete
      }
      return session
    },
    // NOTE: no custom `redirect` callback here.
    // We rely on:
    // - client `signIn(..., { redirectTo / callbackUrl })`
    // - /callback and /onboarding/* routes to handle flow.
  },
})