module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    },
  },
  rules: {
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
    'max-len': ['error', { 'code': 100 }],
    'curly': ['error', 'all']
  },
};
