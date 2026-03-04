// lib/prisma.ts
// @ts-nocheck

import { PrismaClient } from "@prisma/client"

// Simple, runtime-safe Prisma client.
// With SQLite + a small app, a single instance is totally fine.
export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "warn", "error"]
      : ["error"],
})