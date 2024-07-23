import axios from "axios";
import store from "src/app/providers/storeProvider/config/store";
import globalEnv from "src/shared/config/global-variables";
import i18n from "src/shared/config/i18n/i18n";

export const authInstance = axios.create({
	baseURL: globalEnv.API_URL,
});

authInstance.interceptors.request.use((config) => {
	config.headers["Accept-Language"] = i18n.language;
	return config;
});

authInstance.interceptors.request.use((config) => {
	const token = store.getState().user.accessToken;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

authInstance.interceptors.request.use((config) => {
	if (config.headers.SendRefreshToken) {
		const refreshToken = store.getState().user.refreshToken;
		config.headers.refresh = refreshToken;
	}
	return config;
});
