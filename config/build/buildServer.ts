import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildServer(options: BuildOptions): Configuration {
	return {
		open: true,
		port: options.port,
		historyApiFallback: true,
	};
}
