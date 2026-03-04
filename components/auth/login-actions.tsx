"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export function LoginActions() {
  const handleEmailLogin = () => {
    console.log("Email login clicked");
  };

  const handleGoogleLogin = () => {
    signIn("google", {
      redirectTo: "/callback",
      callbackUrl: "/callback", // important: your callback page is /callback
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleEmailLogin}
        className="w-full rounded-[10px] border border-[#BAB9B9] dark:border-[#3f3f46] bg-transparent px-6 py-4 text-lg text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition"
      >
        Login with Email Address
      </button>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-[10px] border border-[#BAB9B9] dark:border-[#3f3f46] bg-transparent px-6 py-4 text-lg text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition"
      >
        <Image
          src="/google-logo.svg"
          alt="Google logo"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span>Login with Google</span>
      </button>
    </>
  );
}