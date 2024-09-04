import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules', 'dist', 'build'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'no-mixed-spaces-and-tabs': 'error',
      'indent': ['error', 4, { 'SwitchCase': 1 }],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-unused-vars': ['error', {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true, 
        'ignoreEnums': true, 
        'ignoreInterfaces': true,
      }],
      'consistent-return': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-shadow': 'error',
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'curly': ['error', 'all'],
      'no-alert': 'warn',
      'max-len': ['error', { 'code': 80, 'ignoreComments': true }],
      'object-shorthand': ['error', 'always'],
      'prefer-const': 'error',
      'array-bracket-spacing': ['error', 'never'],
    }
  }
];
