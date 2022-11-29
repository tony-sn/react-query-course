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
        '@typescript-eslint/await-thenable': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unsafe-argument': 0,
        'eslint/-no-debugger': 0,
        'no-console': 0,
        'eslint/-no-console': 0,
        '@typescript-eslint/prefer-ts-expect-error': 0,
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
