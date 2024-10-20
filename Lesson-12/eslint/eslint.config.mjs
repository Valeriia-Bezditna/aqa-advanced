import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default [
	{
		files: ["**/*.js", "**/*.mjs"]
	},
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals:
              {...globals.browser, ...globals.node}
		}
	},
	{
		plugins: {
			'@stylistic/js': stylisticJs
		}
	},

	pluginJs.configs.recommended,
	{
		rules:{
			"no-unused-vars": "error",
			eqeqeq: "error",
			"prefer-const": "error",
			"no-implicit-coercion": "error",
			curly: "error",
			"arrow-body-style": ['error', 'as-needed'],
			"@stylistic/js/indent": [
				"error",
				"tab",
				{ "SwitchCase": 1 }
			],
			"space-in-parens": ["error", "never"]
		}
	},
	{ files: ["**/*.mjs"],
		rules:{
			"indent": "off"

		}
	},
	{
		ignores: ["data/**"]
	}
];