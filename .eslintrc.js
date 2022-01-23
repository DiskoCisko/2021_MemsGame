module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
    'arrow-body-style': ['error', 'always'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-shadow': [
      'error',
      { builtinGlobals: false, hoist: 'functions', allow: [] },
    ],
    'operator-linebreak': [2, 'after'],
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any'],
      },
    ],
    'object-curly-newline': ['error', { consistent: true }],
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-param-reassign': ['error', { props: false }],
    'default-param-last': ['error'],
  },
};
