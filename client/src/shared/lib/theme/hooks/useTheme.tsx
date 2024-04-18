import {useAppSelector} from "src/shared/lib/store";
import {getTheme} from "src/app/providers/themeProvider";
import {Themes} from "../const/theme";
import {useDispatch} from "react-redux";
import {setTheme} from "src/app/providers";

interface UseThemeResult {
	theme: Themes;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const theme = useAppSelector(getTheme);
	const dispatch = useDispatch();

	function toggleTheme() {
		dispatch(setTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK));
	}

	return {
		theme,
		toggleTheme,
	};
};
