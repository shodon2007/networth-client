import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";


void i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: "ru",
		fallbackLng: "ru",
		backend: {
			loadPath: "https://networth.shodon.ru/api/translation/{{lng}}",
		},
		detection: {
			order: ["path", "navigator", "localStorage"],
			lookupFromPathIndex: 0,
		},
		react: {
			useSuspense: true,
		},
		debug: false,

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
