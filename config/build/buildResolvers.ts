import path from "path";
import {ResolveOptions} from "webpack";

export const buildResolvers = (): ResolveOptions => {
	return {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		alias: {
			src: path.resolve(__dirname, "..", "..", "src"),
		},
		fallback: {
			path: require.resolve("path-browserify"),
			os: false,
			crypto: false,
		},
	};
};
