const { defineConfig } = require('eslint/config');

const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');
const globals = require('globals');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: compat.extends('expo'),

    plugins: {
      prettier,
    },

    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
