import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildRules } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildServer } from "./buildServer";

const buildConfig = (options: BuildOptions): Configuration => {
	const config: Configuration = {
		mode: options.mode,
		entry: options.paths.entry,
		devtool: options.mode === "development" ? "inline-source-map" : undefined,
		output: {
			path: options.paths.output,
			filename: "[name].[contenthash].js",
			clean: true,
		},
		module: {
			rules: buildRules(options),
		},
		resolve: buildResolvers(options),

		plugins: buildPlugins(options),
		devServer: buildServer(options),
	};
	return config;
};

export default buildConfig;
