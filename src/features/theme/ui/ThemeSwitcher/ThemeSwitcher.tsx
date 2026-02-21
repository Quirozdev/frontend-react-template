import { useThemeStore } from "../../model/theme.store";
import { type Theme } from "../../model/theme.types";

export default function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const changeTheme = useThemeStore((state) => state.changeTheme);

  const availableOptions = [
    {
      label: "Light",
      value: "light",
      icon: "☀️",
    },
    {
      label: "Dark",
      value: "dark",
      icon: "🌙",
    },
  ] as const;

  const selectedAvailableOptionIndex = availableOptions.findIndex(
    (availableOption) => availableOption.value === theme,
  )!;

  const selectedAvailableOption =
    availableOptions[selectedAvailableOptionIndex];

  return availableOptions.length === 2 ? (
    <button
      onClick={() => {
        changeTheme(
          availableOptions[
            (selectedAvailableOptionIndex + 1) % availableOptions.length
          ].value,
        );
      }}
      className="border rounded-md p-1"
    >
      {selectedAvailableOption.icon} {selectedAvailableOption.label}
    </button>
  ) : (
    <select
      name="theme"
      value={theme}
      onChange={(e) => {
        const selectedTheme = e.target.value as Theme;
        changeTheme(selectedTheme);
      }}
      className="border rounded-md"
    >
      {availableOptions.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.icon} {option.label}
          </option>
        );
      })}
    </select>
  );
}
