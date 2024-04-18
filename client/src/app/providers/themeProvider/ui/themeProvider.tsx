import { FC, useState, ReactNode } from "react";

import { Themes, LOCAL_STORAGE_THEME_KEY } from "../../../../shared/context/themeProvider/themeContext";

import themeContext from "../../../../shared/context/themeProvider/themeContext";

interface ThemeProviderProps { children: ReactNode }

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes);

	const defaultProps = {
		theme,
		setTheme,
	};

	return <themeContext.Provider value={defaultProps}>
		{children}
	</themeContext.Provider>;
};