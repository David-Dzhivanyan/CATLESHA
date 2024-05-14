module.exports = {
  'globals': {
    'NODE_ENV': true,
    'PUBLIC_PATH': true
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'jquery': true
  },
  'extends': 'eslint:recommended',
  'plugins': [
    'standard',
    'promise'
  ],
  'overrides': [
    {
      'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'jquery': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'module'
      }
    }
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
