import path from "path";
import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
	console.log(options);
	return {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			src: path.resolve(__dirname, "..", "..", "src"),
		},
	};
};
