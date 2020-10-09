module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    // 'prefer-object-spread': [0],
    'react/jsx-filename-extension': [0],
    'import/prefer-default-export': [0]
  }
};
