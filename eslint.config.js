import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{ts,vue}'],
    extends: [
      ...pluginVue.configs['flat/recommended'],
      ...tseslint.configs.recommended,
      prettierConfig,
    ],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
)
