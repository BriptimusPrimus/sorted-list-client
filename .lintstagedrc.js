module.exports = {
  '*.+(js|jsx)': ['eslint', 'jest --findRelatedTests --coverageThreshold {}'],
  '**/*.+(js|jsx|json|css)': ['prettier --write', 'git add']
};
