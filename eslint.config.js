const { defineConfig } = require('eslint/config');

const prettier = require('eslint-plugin-prettier');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends('expo'),

    plugins: {
      prettier,
    },

    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
    },
  },
]);
