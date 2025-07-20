"use client";

import { useTheme } from "@/Providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";

type Theme = "light" | "dark" | "solarized";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes: Theme[] = ["light", "dark", "solarized"];

  const nextTheme = () => {
    const currentIndex = themes.indexOf(theme as Theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "solarized":
        return <SunMoon className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Button
      onClick={nextTheme}
      variant="outline"
      className="flex items-center transition transform hover:scale-105 active:scale-95"
      aria-label="Toggle Theme"
    >
      {renderIcon()}
      {/* <span className="capitalize">{theme}</span> */}
    </Button>
  );
}
