// eslint.config.js or .eslintrc.js

import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { ESLint } from 'eslint'; // ESLint itself
import typescriptParser from '@typescript-eslint/parser';

export default {
  parser: typescriptParser, // Use the TypeScript parser (required for TypeScript)
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Enable ECMAScript modules
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Prettier integration
    'plugin:@typescript-eslint/recommended', // TypeScript specific linting
  ],
  plugins: {
    react: eslintPluginReact,
    prettier: eslintPluginPrettier,
    '@typescript-eslint': '@typescript-eslint/eslint-plugin', // TypeScript plugin
  },
  rules: {
    'prettier/prettier': 'error', // Enforce Prettier formatting rules
    'react/prop-types': 'off',  // Disable prop-types for TypeScript projects
    '@typescript-eslint/no-unused-vars': 'warn', // Handle unused vars in TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable boundary types (optional)
  },
};
