// components/auth/client-signup-form.tsx
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Props {
  action: (formData: FormData) => void | Promise<void>;
}

// Server component: NO "use client", NO hooks.
// Safe to accept a server action and use it directly on the form.
export function ClientSignupForm({ action }: Props) {
  return (
    <form className="mt-8 space-y-4" action={action}>
      {/* Company name */}
      <div className="space-y-1">
        <Label
          htmlFor="name"
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200"
        >
          Client / Company Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter company name"
          autoComplete="organization"
          required
          className="h-10 bg-[#F9FAFB] dark:bg-zinc-900"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <Label
          htmlFor="email"
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200"
        >
          Work Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter work email"
          autoComplete="email"
          required
          className="h-10 bg-[#F9FAFB] dark:bg-zinc-900"
        />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <Label
          htmlFor="password"
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200"
        >
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="****************"
          autoComplete="new-password"
          required
          minLength={8}
          className="h-10 bg-[#F9FAFB] dark:bg-zinc-900"
        />
      </div>

      {/* Confirm password */}
      <div className="space-y-1">
        <Label
          htmlFor="confirmPassword"
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200"
        >
          Re-Type Password
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="****************"
          autoComplete="new-password"
          required
          minLength={8}
          className="h-10 bg-[#F9FAFB] dark:bg-zinc-900"
        />
        {/* You can add server-side error messages here later */}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link href="/login">
          <Button
            type="button"
            variant="outline"
            className="min-w-[120px] border-[#339989] text-[#339989] hover:bg-[#339989]/5"
          >
            Cancel
          </Button>
        </Link>

        <Button
          type="submit"
          className="min-w-[120px] bg-[#EF4F4F] hover:bg-[#e03f3f]"
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}

export default ClientSignupForm;