// eslint.config.js
const typescriptParser = require('@typescript-eslint/parser'); // TypeScript parser
const eslintPluginReact = require('eslint-plugin-react'); // React plugin
const eslintPluginPrettier = require('eslint-plugin-prettier'); // Prettier plugin

module.exports = {
  languageOptions: {
    parser: typescriptParser, // Use the TypeScript parser
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX parsing
      },
    },
  },
  plugins: {
    react: eslintPluginReact,
    prettier: eslintPluginPrettier,
    '@typescript-eslint': 'typescript-eslint', // Ensure you are using the right plugin name
  },
  extends: [
    'eslint:recommended', // Basic ESLint recommendations
    'plugin:react/recommended', // React specific linting rules
    'plugin:prettier/recommended', // Prettier integration
    'plugin:@typescript-eslint/recommended', // TypeScript specific linting rules
  ],
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier formatting
    'react/prop-types': 'off', // Disable prop-types for TypeScript
    '@typescript-eslint/no-unused-vars': 'warn', // TypeScript unused vars
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional rule
  },
};
