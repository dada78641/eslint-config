// @dada78641/eslint-config <https://github.com/dada78641/eslint-config>
// MIT license

import eslint from '@eslint/js';
import {defineConfig} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

export function createConfigs({semi = true} = {}) {
  const baseConfig = defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
      plugins: {
        '@stylistic': stylistic,
        'unused-imports': unusedImports,
      }
    },
    {
      rules: {
        'no-unused-vars': 'off',
        'unused-imports/no-unused-vars': ['error', {args: 'none'}],
        '@stylistic/quotes': ['error', 'single', {allowTemplateLiterals: 'always', avoidEscape: true}],
        '@stylistic/no-tabs': ['error'],
        '@stylistic/object-curly-spacing': ['error', 'never'],
        '@stylistic/semi': ['error', semi ? 'always' : 'never'],
        '@stylistic/member-delimiter-style': ['error', {
          multiline: {delimiter: semi ? 'semi' : 'none', requireLast: true},
          singleline: {delimiter: 'semi', requireLast: false},
        }],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      }
    },
    {
      ignores: [
        'dist/',
      ]
    }
  );

  const nodeConfig = defineConfig(
    baseConfig,
    {
      languageOptions: {
        globals: {
          ...globals.node,
        }
      }
    },
  );

  return {baseConfig, nodeConfig};
}
