"use client";

import * as React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User2, Building2 } from "lucide-react";

interface SignupRoleDialogProps {
  children: React.ReactNode; // trigger (e.g. "Sign Up" button)
}

export function SignupRoleDialog({ children }: SignupRoleDialogProps) {
  return (
    <Dialog>
      {/* Trigger from parent (Sign Up button / link) */}
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="
          max-w-[880px] w-full
          rounded-[30px]
          border border-[#71717A]
          bg-[#FFFAFB] dark:bg-[#020617]
          px-10 py-8
        "
      >
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-3xl md:text-4xl font-semibold text-center text-black dark:text-white">
            Welcome! Let&apos;s get started
          </DialogTitle>

          <DialogDescription asChild>
            <p className="text-base md:text-lg text-center text-black dark:text-[#BAB9B9]">
              Choose how would you like to use our platform!
            </p>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-8 space-y-5">
          {/* Service Provider / Jobseeker */}
          <Link
            href="/signup/service-provider" // TODO: adjust route if needed
            className="
              flex items-center gap-6
              rounded-[24px]
              border-2 border-[#EF4444]
              bg-[#FFFAFB] dark:bg-transparent
              px-6 py-5
              transition
              hover:bg-red-50/60 dark:hover:bg-red-500/5
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-red-500
              focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#EF4444]/60">
              <User2 className="h-6 w-6 text-[#EF4444]" />
            </div>

            <div className="text-left">
              <div className="text-lg md:text-xl font-semibold text-black dark:text-white">
                Service Provider / Jobseeker
              </div>
              <p className="text-sm md:text-base text-black dark:text-[#BAB9B9]">
                Find your dream job opportunity
              </p>
            </div>
          </Link>

          {/* Client / Company */}
          <Link
            href="/signup/client" // TODO: adjust route if needed
            className="
              flex items-center gap-6
              rounded-[24px]
              border-2 border-[#BAB9B9] dark:border-[#3f3f46]
              bg-[#FFFAFB] dark:bg-transparent
              px-6 py-5
              transition
              hover:bg-zinc-50/80 dark:hover:bg-white/5
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white
              focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#BAB9B9] dark:border-[#3f3f46]">
              <Building2 className="h-6 w-6 text-[#EF4444]" />
            </div>

            <div className="text-left">
              <div className="text-lg md:text-xl font-semibold text-black dark:text-white">
                Client / Company
              </div>
              <p className="text-sm md:text-base text-black dark:text-[#BAB9B9]">
                Post jobs and find exceptional talent
              </p>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}