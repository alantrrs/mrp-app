import config from 'eslint-config-love'

const eslintConfig = [
  config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.app.json', './tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    },
  },
  {
    files: ['vite.config.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json'],
      },
    },
  },
  {
    ignores: ['**/dist/**', '**/src/lib/**', '**/src/vite-env.d.ts', 'tailwind.config.js', 'postcss.config.js', 'eslint.config.mjs'],
  }
]

export default eslintConfig