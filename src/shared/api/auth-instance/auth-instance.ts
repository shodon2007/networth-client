import axios from "axios";
import store from "src/app/providers/storeProvider/config/store";
import i18n from "src/shared/config/i18n/i18n";

export const instance = axios.create({
	baseURL: "https://networth.shodon.ru",
});

instance.interceptors.request.use((config) => {
	config.headers["Accept-Language"] = i18n.language;
	return config;
});

instance.interceptors.request.use((config) => {
	const token = store.getState().user.refreshToken;
	if (token) {
		config.headers["authorization"] = `Bearer ${token}`;
	}
	return config;
});
