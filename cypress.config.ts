import {defineConfig} from "cypress";
import * as dotenv from "dotenv";
import path from "path";

export default defineConfig({
	e2e: {
		viewportWidth: 1441,
		viewportHeight: 901,
		setupNodeEvents(on, config) {
			const env = dotenv.config({
				path: path.resolve("dev.env"),
			}).parsed;
			console.log(env);
			let envConfig = {};
			if (env) {
				envConfig = Object.keys(env).reduce((acc, key) => {
					acc[key] = env[key];
					return acc;
				}, {});
			}
			return {...config, env: envConfig};
		},
		baseUrl: "http://localhost:3001/",
	},
});
