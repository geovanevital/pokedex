module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'comma-dangle': 'off',
    'no-unused-expressions': 'off',
    'react/no-array-index-key': 'off',
    camelcase: 'off',
    'no-nested-ternary': 'off',
    'no-restricted-globals': 'off',
  },
  globals: {
    fetch: false,
  },
};
