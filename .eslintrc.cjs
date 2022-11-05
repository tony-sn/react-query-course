module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@antfu',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['src/**/*.{ts, tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'typescript-eslint/no-explicit-any': 'off',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: './',
        ecmaFeatures: {
          // Workaround: disabling this fixes the problem
          jsx: true,
        },
        project: ['./packages/*/tsconfig.json', './tsconfig.json'],
      },
    },
  ],
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    browser: true,
    node: true,
  },
}
