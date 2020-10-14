module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'import/prefer-default-export': [0]
  }
};
