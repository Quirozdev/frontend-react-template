export type SupportedThemes = "light" | "dark";

export const THEME_STORAGE_KEY = "theme" as const;

export interface ThemeState {
  theme: SupportedThemes;
  changeTheme: (newTheme: SupportedThemes) => void;
}
