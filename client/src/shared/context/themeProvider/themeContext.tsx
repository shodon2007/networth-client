import { createContext } from "react";

export const LOCAL_STORAGE_THEME_KEY = "theme";

export enum Themes {
	LIGHT = "light",
	DARK = "dark",
}

export interface ThemeContextProps {
	setTheme?: (theme: Themes) => void;
	theme: Themes;
}

const themeContext = createContext<ThemeContextProps>({
	theme: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.DARK,
});

export default themeContext;
