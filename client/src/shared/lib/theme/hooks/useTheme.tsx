import { getTheme } from "../helper/getTheme";
import {Themes} from "../types/theme";
import { setTheme } from "../helper/themeSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/model";

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
