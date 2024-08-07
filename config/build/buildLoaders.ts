import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildRules = ({isDev}: BuildOptions): RuleSetRule[] => {
	const svgFileLoader = {
		test: /\.svg$/i,
		resourceQuery: {not: [/react/]},
		use: ["url-loader"],
	};
	const svgReactLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		resourceQuery: /react/,
		use: ["@svgr/webpack"],
	};

	const fontLoader = {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: "asset/resource",
	};

	const styleLoader: RuleSetRule = {
		test: /\.scss$/,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes(".module.")),
						localIdentName: isDev
							? "[path]_[name]__[local]--[hash:base64:5]"
							: "[hash:base64:8]",
					},
					esModule: false,
				},
			},
			"sass-loader",
		],
	};
	const typescriptLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};
	const babelLoader: RuleSetRule = {
		test: /\.tsx?$/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
			},
		},
		exclude: /node_modules/,
	};
	return [
		fontLoader,
		svgFileLoader,
		svgReactLoader,
		styleLoader,
		babelLoader,
		typescriptLoader,
	];
};
