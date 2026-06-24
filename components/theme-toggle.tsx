"use client";

import { MoonStar, Palette } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

const themeLabels = {
  default: "افتراضي",
  "classic-blue": "أزرق كلاسيكي",
  orange: "برتقالي",
  dark: "داكن",
};

export function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="secondary"
      className="fixed left-4 top-4 z-20 rounded-full px-3 py-2 shadow-lg"
      onClick={cycleTheme}
      aria-label="تبديل النمط"
    >
      {theme === "dark" ? <MoonStar className="size-4" /> : <Palette className="size-4" />}
      <span className="mr-2 text-xs">{themeLabels[theme]}</span>
    </Button>
  );
}
