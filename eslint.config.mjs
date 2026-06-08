import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
	{
		ignores: [
			"node_modules/**",
			"local/**",
			"tutorials/01-classes/deep-inheritance/exercises/practice.js",
			"tutorials/01-classes/inheritance-basics/exercises/practice.js",
			"**/**.test.js",
		],
	},
	js.configs.recommended,
	{
		files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.node,
				...globals.commonjs,
			},
		},
		rules: {
			"no-console": "off",
			"no-unused-vars": "off",
			"no-useless-assignment": "off",
			"no-unassigned-vars": "off",
			"no-irregular-whitespace": "off",
		},
	},
	{
		files: ["**/*.cjs"],
		languageOptions: {
			sourceType: "commonjs",
		},
	},
	eslintConfigPrettier,
];
