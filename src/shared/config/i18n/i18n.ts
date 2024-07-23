import i18n, {use} from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";
import globalEnv from "../global-variables";
use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		lng: "ru",
		fallbackLng: "ru",
		backend: {
			loadPath: `${globalEnv.API_URL}/api/translation/{{lng}}`,
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
