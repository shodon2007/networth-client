import path from "path";
import type {Config} from "jest";

const config: Config = {
	preset: "ts-jest",
	clearMocks: true,
	testEnvironment: "jsdom",
	coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
	moduleDirectories: ["node_modules"],
	modulePaths: ["<rootDir>"],
	setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
	rootDir: "../../",
	testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
	moduleNameMapper: {
		"\\.s?css$": "identity-obj-proxy",
		"\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
	},
};

export default config;
