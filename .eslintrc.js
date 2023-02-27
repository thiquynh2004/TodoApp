module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    "react",
  ],
  rules: {
    indent: ["off", "tab"],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
    quotes: "off"
  }
};
