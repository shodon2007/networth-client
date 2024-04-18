import toggleTheme from "../utils/toggleTheme";
import {useAppSelector} from "src/shared/lib/store";
import {getTheme} from "src/app/providers/themeProvider";
import {Themes} from "../const/theme";

interface UseThemeResult {
	theme: Themes;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const {theme} = useAppSelector(getTheme);

	console.log(theme);
	// const {theme, setTheme} = useContext<ThemeContextProps>(themeContext);

	return {
		theme,
		toggleTheme,
	};
};
