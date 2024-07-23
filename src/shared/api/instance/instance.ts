import axios from "axios";
import globalEnv from "src/shared/config/global-variables";
import i18n from "src/shared/config/i18n/i18n";

export const instance = axios.create({
	baseURL: globalEnv.API_URL,
});

instance.interceptors.request.use((config) => {
	config.headers["Accept-Language"] = i18n.language;
	return config;
});
