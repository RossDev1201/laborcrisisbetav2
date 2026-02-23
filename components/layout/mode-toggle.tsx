"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Until we're mounted, don't depend on resolvedTheme.
  // This keeps server and first client render identical.
  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-8 w-8 rounded-full border border-border bg-background p-0 hover:bg-accent"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>

      <span className="flex h-4 w-4 overflow-hidden rounded-full border border-border">
        <span
          className={`h-4 w-2 ${
            isDark ? "bg-background" : "bg-foreground"
          }`}
        />
        <span
          className={`h-4 w-2 ${
            isDark ? "bg-foreground" : "bg-background"
          }`}
        />
      </span>
    </Button>
  );
}