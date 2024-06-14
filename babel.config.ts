module.exports = {
	presets: [
		["@babel/preset-env", {targets: {node: "current"}}],
		"@babel/preset-react",
		"@babel/plugin-syntax-jsx",
		"@babel/preset-typescript",
	],
};
