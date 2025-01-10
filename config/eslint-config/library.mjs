import { resolve } from 'node:path';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginImportX from 'eslint-plugin-import-x'
import globals from 'globals'
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const project = resolve(process.cwd(), 'tsconfig.json');

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
    languageOptions: {
      parserOptions: {
        project,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      }
    },
    plugins: {
      'import-x': pluginImportX,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'quotes': [
        'error',
        'single',
        { allowTemplateLiterals: true }
      ],
      'no-magic-numbers': 'off',
      'no-duplicate-imports': 'off',
      'import-x/no-duplicates': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  }
)
