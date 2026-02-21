import { useEffect, useState } from "react";
import { getItemOrDefault, setItem } from "../lib/local-storage";

export type SupportedThemes = "light" | "dark";

const themeKey = "theme" as const;

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setItem(themeKey, theme);
  }, [theme]);

  function changeTheme(newTheme: SupportedThemes) {
    setTheme(newTheme);
  }

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function getInitialTheme() {
    return getItemOrDefault<SupportedThemes>(themeKey, getSystemTheme());
  }

  return { theme, changeTheme, getSystemTheme };
}
