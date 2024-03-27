import { useContext } from "react";
import themeContext, {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContextProps,
  Themes,
} from "./themeContext";

interface UseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext<ThemeContextProps>(themeContext);

  function toggleTheme() {
    const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  }

  return {
    theme,
    toggleTheme,
  };
};