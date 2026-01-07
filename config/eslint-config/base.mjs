import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint';
import pluginImportX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    ignores: [
      '*.config.*',
      '**/dist/**',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
  }),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    plugins: {
      'import-x': pluginImportX,
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    rules: {
      // common
      'no-magic-numbers': 'off',
      'no-duplicate-imports': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      // import
      'import-x/no-duplicates': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/consistent-type-imports': ['error'],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      // stylistic
      '@stylistic/brace-style': ['error', '1tbs'],
      // '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      // '@stylistic/block-spacing': 'error',
      // '@stylistic/comma-dangle': ['error', {
      //   'arrays': 'always-multiline',
      //   'objects': 'always-multiline',
      //   'imports': 'always-multiline',
      //   'exports': 'always-multiline',
      //   'functions': 'never',
      //   'importAttributes': 'never',
      //   'dynamicImports': 'never',
      // }],
      // '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
      // '@stylistic/indent': ['error', 2, { 'SwitchCase': 1 }],
      // '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      // '@stylistic/keyword-spacing': ['error', { 'before': true, after: true }],
      // '@stylistic/semi': ['error', 'never', { 'beforeStatementContinuationChars': 'always' }],
      // '@stylistic/computed-property-spacing': ['error', 'always'],
      // '@stylistic/dot-location': ['error', 'property'],
      // '@stylistic/eol-last': ['error', 'always'],
      // '@stylistic/generator-star-spacing': ['error', {'before': true, 'after': false}],
      // '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      // '@stylistic/array-bracket-newline': ['error', 'consistent'],
      // '@stylistic/array-bracket-spacing': ['error', 'always'],
      // '@stylistic/arrow-parens': ['error', 'as-needed'],
      // '@stylistic/arrow-spacing': 'error',
      // '@stylistic/max-len': ['warn', { 'code': 80 }],
      // '@stylistic/template-curly-spacing': ['error', 'always'],
    },
  },
])
