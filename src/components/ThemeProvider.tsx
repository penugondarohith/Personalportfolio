"use client";

import { useEffect, useState } from "react";

/**
 * ThemeProvider — manages dark/light mode state.
 * Uses HTML class toggling (dark/light on <html>) to switch themes.
 * Default theme is dark.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme, default to dark
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
