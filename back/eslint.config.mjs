import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    rules: {
      'no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  pluginJs.configs.recommended,
];
