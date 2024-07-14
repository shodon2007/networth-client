import NetWorth from "src/shared/assets/NetWorthLogo.svg";
import {SearchBar} from "src/features/SearchBar/";

import cls from "./Header.module.scss";
import {ThemeSwitcher} from "src/features/ThemeSwitcher";
import {ToggleLanguage} from "src/features/ToggleLanguage";
import { useTranslation } from "react-i18next";
import { useTheme } from "src/shared/lib/theme";

export const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

};
