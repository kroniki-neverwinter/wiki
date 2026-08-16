import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import docusaurus from '@docusaurus/eslint-plugin';

export default [
  {
    ignores: [
      'build/',
      'node_modules/',
      '.docusaurus/',
      '.cache/',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],

    plugins: {
      react,
      'react-hooks': reactHooks,
      docusaurus,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...docusaurus.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
];