const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  settings: {
    react: {
      version: "16.3.1",
      flowVersion: "0.82",
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['import', 'prettier', 'react', 'react-native', 'flowtype'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],
  rules: {
    curly: ERROR,
    'no-console': [ERROR, { allow: ['warn', 'error'] }],
    'no-duplicate-imports': ERROR,
    'no-underscore-dangle': OFF,
    'import/order': [
      ERROR,
      {
        groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': ERROR,
    'import/no-mutable-exports': ERROR,
    'import/no-absolute-path': ERROR,
    'prettier/prettier': [
      ERROR,
      { singleQuote: true, trailingComma: 'all', jsxBracketSameLine: false },
    ],
    'react/jsx-boolean-value': [ERROR, 'always'],
    'react/jsx-no-bind': ERROR,
    'react/no-access-state-in-setstate': ERROR,
    'react/prop-types': OFF,
    'react-native/no-unused-styles': ERROR,
    'flowtype/require-valid-file-annotation': [ERROR, 'always'],
    'flowtype/newline-after-flow-annotation': [ERROR, 'always'],
  },
};
