export const themes = ["light", "dark"] as const;

// export type SupportedThemes = "light" | "dark";

export type Theme = (typeof themes)[number];

export const THEME_STORAGE_KEY = "theme" as const;

export interface ThemeState {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
}
