import {SearchBar} from "src/shared/ui/searchbar/SearchBar";
import cls from "./Header.module.scss";
import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import magnifier from "src/shared/assets/magnifier.svg";
import Button from "src/shared/ui/Button/Button";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";

export const Header = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={cls.header}>
			<img src={NetWorth} className={cls.header__Logo} />
			<SearchBar icon={magnifier}>Find . . .</SearchBar>
			<Button onClick={toggleTheme}>{theme}</Button>
		</div>
	);
};
