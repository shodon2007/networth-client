import { useCallback, useEffect, useState } from "react";
import i18n from "src/shared/config/i18n/i18n";
import Button from "src/shared/ui/Button/Button";

const ToggleLanguage = () => {
	const [lang, setLang] = useState(i18n.language);
	const toggleLanguage = useCallback(async () => {
		await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
		if (i18n.language !== lang) {
			setLang(i18n.language);
		}
	}, [lang]);
	return <Button onClick={toggleLanguage}>{lang}</Button>;
};

export default ToggleLanguage;
