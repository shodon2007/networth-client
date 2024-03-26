import { FC, useState, ReactNode } from "react";

import { Themes, LOCAL_STORAGE_THEME_KEY } from "../../../../shared/context/themeProvider/lib/themeContext";

import themeContext from "../../../../shared/context/themeProvider/lib/themeContext";

interface themeProviderProps { children: ReactNode }

const defaultTheme =
	localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes;

export const themeProvider: FC<themeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(defaultTheme);

	const defaultProps = {
		theme,
		setTheme,
	};

	return <themeContext.Provider value={defaultProps}>
		{children}
	</themeContext.Provider>;
};