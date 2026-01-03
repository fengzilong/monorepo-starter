import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint';
import pluginImportX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import stylisticTs from '@stylistic/eslint-plugin-ts'
// import stylisticJs from '@stylistic/eslint-plugin-js'

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
      // some rule only has js version
      // waiting for https://github.com/eslint-stylistic/eslint-stylistic/issues/482
      '@stylistic/ts': stylisticTs,
      'import-x': pluginImportX,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // common
      'no-magic-numbers': 'off',
      'no-duplicate-imports': 'off',
      // import
      'import-x/no-duplicates': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // stylistic
      '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      // '@stylistic/js/jsx-quotes': ['error', 'prefer-double'],
      // '@stylistic/js/array-bracket-newline': ['error', 'consistent'],
      // '@stylistic/js/array-bracket-spacing': ['error', 'always'],
      // '@stylistic/js/arrow-parens': ['error', 'as-needed'],
      // '@stylistic/js/arrow-spacing': 'error',
      '@stylistic/ts/block-spacing': 'error',
      '@stylistic/ts/comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
        'importAttributes': 'never',
        'dynamicImports': 'never',
      }],
      '@stylistic/ts/comma-spacing': ['error', { 'before': false, 'after': true }],
      // '@stylistic/js/computed-property-spacing': ['error', 'always'],
      // '@stylistic/js/dot-location': ['error', 'property'],
      // '@stylistic/js/eol-last': ['error', 'always'],
      // '@stylistic/js/generator-star-spacing': ['error', {'before': true, 'after': false}],
      '@stylistic/ts/indent': ['error', 2, { 'SwitchCase': 1 }],
      '@stylistic/ts/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      '@stylistic/ts/keyword-spacing': ['error', { 'before': true, after: true }],
      // '@stylistic/js/max-len': ['warn', { 'code': 80 }],
      '@stylistic/ts/semi': ['error', 'never', { 'beforeStatementContinuationChars': 'always' }],
      // '@stylistic/js/template-curly-spacing': ['error', 'always'],
    },
  },
])
