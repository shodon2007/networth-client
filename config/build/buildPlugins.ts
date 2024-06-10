import { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

type buildPluginsFn = (options: BuildOptions) => WebpackPluginInstance[];

export const buildPlugins: buildPluginsFn = (options) => {
	return [
		new HtmlWebpackPlugin({
			template: options.paths.html,
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css",
		}),
	];
};
