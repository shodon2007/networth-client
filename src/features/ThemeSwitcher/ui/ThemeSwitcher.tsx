import {useTheme} from "src/shared/lib/theme";
import Button from "src/shared/ui/Button/Button";

const ThemeSwitcher = () => {
	const {theme, toggleTheme} = useTheme();
	return <Button onClick={toggleTheme}>{theme}</Button>;
};

export default ThemeSwitcher;
