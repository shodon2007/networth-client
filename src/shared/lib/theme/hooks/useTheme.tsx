import {setTheme} from "src/app/providers";
import {getTheme} from "src/app/providers/themeProvider";
import {useAppDispatch, useAppSelector} from "src/shared/lib/store";

import {Themes} from "../const/theme";

interface UseThemeResult {
	theme: Themes;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const theme = useAppSelector(getTheme);
	const dispatch = useAppDispatch();

	function toggleTheme() {
		dispatch(setTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK));
	}

	return {
		theme,
		toggleTheme,
	};
};
