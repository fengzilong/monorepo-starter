import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginImportX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import stylisticJs from '@stylistic/eslint-plugin-js'

export default tseslint.config(
  {
    ignores: [
      '*.config.*',
      '**/dist/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      '@stylistic/js/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/js/array-bracket-spacing': ['error', 'always'],
      '@stylistic/js/arrow-parens': ['error', 'as-needed'],
      '@stylistic/js/arrow-spacing': 'error',
      '@stylistic/js/block-spacing': 'error',
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/js/computed-property-spacing': ['error', 'always'],
      '@stylistic/js/dot-location': ['error', 'property'],
      '@stylistic/js/eol-last': ['error', 'always'],
      '@stylistic/js/generator-star-spacing': ['error', {'before': true, 'after': false}],
      '@stylistic/js/indent': ['error', 2, { 'SwitchCase': 1 }],
      '@stylistic/js/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      '@stylistic/js/keyword-spacing': ['error', { 'before': true, after: true }],
      '@stylistic/js/max-len': ['warn', { 'code': 80 }],
      '@stylistic/js/semi': ['error', 'never', { 'beforeStatementContinuationChars': 'always'}],
      '@stylistic/js/template-curly-spacing': ['error', 'always'],
    },
  },
  {
    plugins: {
      'import-x': pluginImportX,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-magic-numbers': 'off',
      'no-duplicate-imports': 'off',
      'import-x/no-duplicates': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
)
