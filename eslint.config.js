import { ESLint } from 'eslint'; // Assuming 'tseslint' is an alias
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser', // Ensure we're using TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // ESLint's base rules
    'plugin:react/recommended', // React plugin's recommended rules
    'plugin:prettier/recommended', // Integrate Prettier with ESLint
    'plugin:@typescript-eslint/recommended', // TypeScript plugin's recommended rules
  ],
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    // React Hooks rules
    ...reactHooks.configs.recommended.rules,

    // React Refresh rule
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
