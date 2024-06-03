import axios from "axios";
import i18n from "src/shared/config/i18n/i18n";

export const instance = axios.create({
	baseURL: "https://networth.shodon.ru",
});

instance.interceptors.request.use((config) => {
	config.headers["Accept-Language"] = i18n.language;
	return config;
});
