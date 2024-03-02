import {FC, useState} from "react";

import {Themes, LOCAL_STORAGE_THEME_KEY} from "../lib/themeContext";

import themeContext from "../lib/themeContext";

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

const themeProvider: FC = () => {
	const [theme, setTheme] = useState<Themes>(defaultTheme);

	const defaultProps = {
		theme,
		setTheme,
	};

	return <themeContext.Provider value={defaultProps}></themeContext.Provider>;
};

export default themeProvider;
