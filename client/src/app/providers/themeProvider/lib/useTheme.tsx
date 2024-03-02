import {useContext} from "react";
import themeContext, {
	LOCAL_STORAGE_THEME_KEY,
	ThemeContextProps,
	Themes,
} from "./themeContext";

interface UseThemeResult {
	theme: Themes;
	toggleTheme: () => void;
}

const useTheme = (): UseThemeResult => {
	const {theme, setTheme} = useContext<ThemeContextProps>(themeContext);

	function toggleTheme() {
		const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setTheme?.(newTheme);
	}

	return {
		theme: theme ?? Themes.DARK,
		toggleTheme,
	};
};

export default useTheme;
