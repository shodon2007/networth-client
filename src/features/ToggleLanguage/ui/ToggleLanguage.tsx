import i18n from "src/shared/config/i18n/i18n";
import Button from "src/shared/ui/Button/Button";

const ToggleLanguage = () => {
	const toggleLanguage = () => {
		void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};
	return <Button onClick={toggleLanguage}>{i18n.language}</Button>;
};

export default ToggleLanguage;
