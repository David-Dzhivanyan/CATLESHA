module.export = {
  "globals": {
    "NODE_ENV": true
  },
  "env": {
    "jquery": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "plugins": [
    "promise"
  ],
  "rules": {
    "no-var": "off",
    "max-len": "off",
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": false,
        "ArrowFunctionExpression": false,
        "FunctionExpression": false
      }
    }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  }
}
