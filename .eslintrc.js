module.exports = {
  env: {
    jest: true,
    node: true
  },

  extends: "airbnb",

  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true
  },

  rules: {
    "consistent-return": ["off"],

    "import/no-named-as-default": ["off"],

    "space-before-function-paren": [
      "error",
      {
        anonymous: "ignore",
        named: "always"
      }
    ],
  }
};
