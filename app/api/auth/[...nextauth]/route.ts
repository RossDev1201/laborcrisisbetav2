// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;

// (Optional, but safe if Prisma ever complains about edge runtime)
// export const runtime = "nodejs";