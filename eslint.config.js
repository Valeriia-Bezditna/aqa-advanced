import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';
import jestPlugin from 'eslint-plugin-jest';


export default [
	{
		languageOptions:
        {
        	ecmaVersion: 'latest',
        	sourceType: 'module',
        	globals: {
        		...globals.node,   // Глобальні змінні для Node.js
        		...globals.jest,   // Глобальні змінні для Jest
        		...globals.es2021
        	}
        },


	},
	{
		plugins: {
			'@stylistic/js': stylisticJs
		}
	},
	{
	// 	plugins: {
	// 		"plugins": ["jest"],
	// 		"extends": ["plugin:jest/recommended"]
	// }
	},
	pluginJs.configs.recommended,


	{
		plugins: {
			jest: jestPlugin
		},
		rules: jestPlugin.configs.recommended.rules  // Правила з конфігурації Jest
	},
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
			"no-useless-escape": "off",
			"space-in-parens": ["error", "never"]
		}
	},

	{ files: ["**/*.mjs","**/*.js" ],
		rules:{
			"indent": "off"

		}
	},
	{
		ignores: ["data/**"]
	}
];