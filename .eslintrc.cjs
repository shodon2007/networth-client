module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/jsx-runtime",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	settings: {
		react: {
			version: "18.2.0",
		},
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx", ".svg", ".svg?react"],
			},
			alias: {
				map: [["src", "./src"]],
				extensions: [".js", ".jsx", ".ts", ".tsx", ".svg", ".svg?react"],
			},
		},
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/display-name": 0,
		"react/prop-types": "off",
		"import/no-unresolved": [
			"error",
			{
				ignore: ["\\.svg", "\\.svg?react"],
			},
		],
		"react/react-in-jsx-scope": 0,
		"import/no-named-as-default": 0,
		"import/named": 0,
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type",
					"unknown",
				],
				pathGroups: [
					{
						pattern: "*.scss",
						group: "unknown",
						position: "after",
					},
				],
			},
		],
	},
	ignorePatterns: ["*.svg", "*.svg?react"],
};
