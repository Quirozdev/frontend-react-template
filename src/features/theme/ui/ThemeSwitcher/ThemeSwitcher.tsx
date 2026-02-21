import { useThemeStore } from "../../model/theme.store";
import type { SupportedThemes } from "../../model/theme.types";

export default function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);

  return (
    <select
      name="theme"
      value={theme}
      onChange={(e) => {
        const selectedTheme = e.target.value as SupportedThemes;
        changeTheme(selectedTheme);
      }}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
