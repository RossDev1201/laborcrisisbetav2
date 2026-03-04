// eslint.config.mjs

// Use Next's shareable configs directly — no `eslint/config` import needed
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default [
  // Next.js recommended + Core Web Vitals rules
  ...nextVitals,

  // TypeScript rules from eslint-config-next
  ...nextTs,

  // Global ignores (equivalent to `globalIgnores` helper)
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
];