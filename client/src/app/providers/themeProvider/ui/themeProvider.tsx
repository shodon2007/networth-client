import { FC, useState, ReactNode } from "react";

import { Themes, LOCAL_STORAGE_THEME_KEY } from "../../../../shared/context/themeProvider/lib/themeContext";

import themeContext from "../../../../shared/context/themeProvider/lib/themeContext";

interface themeProviderProps { children: ReactNode }

export const themeProvider: FC<themeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Themes>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes);

	const defaultProps = {
		theme,
		setTheme,
	};

	return <themeContext.Provider value={defaultProps}>
		{children}
	</themeContext.Provider>;
};