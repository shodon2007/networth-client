export interface BuildEnv {
  mode: BuildMode;
}

export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
}
