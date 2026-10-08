// @dada78641/eslint-config <https://github.com/dada78641/eslint-config>
// MIT license

import eslint from '@eslint/js';
import {defineConfig} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export function createConfigs({semi = true} = {}) {
  const baseConfig = defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
      plugins: {
        '@stylistic': stylistic,
      }
    },
    {
      rules: {
        '@stylistic/quotes': ['error', 'single', {allowTemplateLiterals: 'always', avoidEscape: true}],
        '@stylistic/no-tabs': ['error'],
        '@stylistic/object-curly-spacing': ['error', 'never'],
        '@stylistic/semi': ['error', semi ? 'always' : 'never'],
        '@stylistic/member-delimiter-style': ['error', {
          multiline: {delimiter: semi ? 'semi' : 'none', requireLast: true},
          singleline: {delimiter: 'semi', requireLast: false},
        }],
        '@typescript-eslint/consistent-type-definitions': 'off',
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
