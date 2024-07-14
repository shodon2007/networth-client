import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import {SearchBar} from "src/features/SearchBar/";

import cls from "./Header.module.scss";
import {ThemeSwitcher} from "src/features/ThemeSwitcher";
import {ToggleLanguage} from "src/features/ToggleLanguage";

export const Header = () => {
	return (
		<div className={cls.header}>
			<img src={NetWorth} className={cls.logo} />
			<SearchBar />
			<ThemeSwitcher />
			<ToggleLanguage />
		</div>
	);
};