"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { ThemeName } from "@/types/spare";

const themes: ThemeName[] = ["default", "classic-blue", "orange", "dark"];

interface ThemeContextValue {
  theme: ThemeName;
  cycleTheme: () => void;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === "undefined") {
      return "default";
    }

    const storedTheme = localStorage.getItem("spare-theme") as ThemeName | null;
    return storedTheme && themes.includes(storedTheme) ? storedTheme : "default";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("spare-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      cycleTheme: () => {
        const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
        setThemeState(nextTheme);
      },
      setTheme: (nextTheme: ThemeName) => setThemeState(nextTheme),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
