module.exports = {
	presets: [
		["@babel/preset-env", {targets: {node: "current"}}],
		"@babel/preset-react",
		"@babel/plugin-syntax-jsx",
		"@babel/preset-typescript",
	],
	env: {
		production: {
			plugins: [["react-remove-properties", {properties: ["data-testid"]}]],
		},
	},
};
