import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint';
import typescriptParser from '@typescript-eslint/parser';

export default defineConfig({
  parser: typescriptParser, // Use the TypeScript parser (required for TypeScript)
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Prettier integration
  ],
  plugins: {
    react: eslintPluginReact,
    prettier: eslintPluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier formatting rules
    'react/prop-types': 'off',  // Customize based on your project
  },
});
