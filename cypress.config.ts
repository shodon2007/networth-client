import {defineConfig} from "cypress";
import * as dotenv from "dotenv";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			const env = dotenv.config().parsed;
			let envConfig = {};
			if (env) {
				envConfig = Object.keys(env).reduce((acc, key) => {
					acc[key] = env[key];
					return acc;
				}, {});
			}
			return {...config, env: envConfig};
		},
		baseUrl: "http://localhost:3000/",
	},
});
