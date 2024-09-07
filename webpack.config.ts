import path from "path";
import {Configuration} from "webpack";
import buildConfig from "./config/build/buildConfig";
import {BuildEnv, BuildOptions, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
	const mode: BuildOptions["mode"] = env.mode ?? "development";
	const isDev = mode === "development";

	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		html: path.resolve(__dirname, "public", "index.html"),
		output: path.resolve(__dirname, "dist"),
		env: isDev
			? path.resolve(__dirname, "dev.env")
			: path.resolve(__dirname, "prod.env"),
	};
	const PORT = env.port ?? 9889;
	const options: BuildOptions = {
		mode: env.mode ?? "development",
		paths: paths,
		port: PORT,
		isDev: env.mode === "development",
	};

	const config = buildConfig(options);
	return config;
};
