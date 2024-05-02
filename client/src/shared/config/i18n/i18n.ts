import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

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
