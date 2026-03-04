// eslint.config.mjs

// Minimal flat config that works everywhere.
// No imports, so no "exports" / subpath issues on Vercel.

export default [
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