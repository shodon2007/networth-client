import {SearchBar} from "src/shared/ui/searchbar/SearchBar";
import cls from "./Header.module.scss";
import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import magnifier from "src/shared/assets/magnifier.svg";
import Button from "src/shared/ui/Button/Button";
import {useTheme} from "src/shared/lib/theme/hooks/useTheme";
import {useTranslation} from "react-i18next";

export const Header = () => {
	const {theme, toggleTheme} = useTheme();
	/*
		Кароче попробуй для SearchBar (внизу) сам добавить перевод.
		1. надо t из useTranslation достать и внизу написать типа t("header.search").
		2. На сервере написать файлы переводов, там интуитивно понятно (наверное).
		3. Удали крч потом эти коментарии бро,
	*/
	const {i18n} = useTranslation();

	const toggleLanguage = () => {
		// Этот функционал наверное куда-то надо вывести типа entities или shared, но я пока чем-то другим занят)
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<div className={cls.header}>
			<img src={NetWorth} className={cls.header__Logo} />
			<SearchBar icon={magnifier}>Find . . .</SearchBar>
			<Button onClick={toggleTheme}>{theme}</Button>
			<Button onClick={toggleLanguage}>{i18n.language}</Button>
		</div>
	);
};
