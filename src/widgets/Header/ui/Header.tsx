import {useTranslation} from "react-i18next";
import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import Button from "src/shared/ui/Button/Button";
import {SearchBar} from "src/shared/ui/searchbar/SearchBar";

import cls from "./Header.module.scss";

export const Header = () => {
	const {theme, toggleTheme} = useTheme();
	const {i18n} = useTranslation();

	const toggleLanguage = () => {
		// Этот функционал наверное куда-то надо вывести типа entities или shared, но я пока чем-то другим занят)
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<div className={cls.header}>
			<img src={NetWorth} className={cls.header__Logo} />
			<SearchBar>find . . .</SearchBar>
			<Button onClick={toggleTheme}>{theme}</Button>
			<Button onClick={toggleLanguage}>{i18n.language}</Button>
		</div>
	);
};
