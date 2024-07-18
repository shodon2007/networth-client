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
	testTimeout: 10000,
	moduleNameMapper: {
		"\\.s?css$": "identity-obj-proxy",
		"\\.svg$": "<rootDir>/config/jest/empty.ts",
		"\\.svg\\?react$": "<rootDir>/config/jest/jestEmptyComponent.tsx",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/config/jest/empty.ts",
	},
};

export default config;
