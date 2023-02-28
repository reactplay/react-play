module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['**/plays/index.js'],

  rules: {
    'import/extensions': 0,

    'import/no-named-as-default-member': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0,

    // type - any would be very handy in few cases.
    // The validation shouldn't be at linters end rather at code review end
    '@typescript-eslint/no-explicit-any': 0,

    // Empty functions are handy for creating protocol not execution
    '@typescript-eslint/no-empty-function': 0,

    // Require a whitespace at the beginning of a comment
    'spaced-comment': ['error', 'always'],

    // Maximum line length for comments
    // Trailing comments allowed beyond maximum line length
    'max-len': ['error', { code: 400, comments: 200, ignoreTrailingComments: true }],

    // Require PascalCase for user-defined JSX components
    'react/jsx-pascal-case': ['error'],

    // Console logs cannot be committed.
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Require props to be sorted
    'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true }],

    // Omit boolean prop value when set to true
    'react/jsx-boolean-value': ['error', 'never'],

    // Require self closing tags in JSX/HTML
    'react/self-closing-comp': ['error', { component: true, html: true }],

    // Disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': ['error', 'never'],

    // Require blank line before certain statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'export' },
      // Ignore consecutive export statements
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'continue' },
      { blankLine: 'always', prev: '*', next: 'throw' }
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
