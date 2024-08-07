export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export type BuildMode = "development" | "production";

export interface BuildPaths {
	entry: string;
	html: string;
	output: string;
	env: string;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	port: number;
	isDev: boolean;
}
