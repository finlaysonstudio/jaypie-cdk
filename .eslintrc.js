module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    // "Add plugin:prettier/recommended as the last item in the extends array in your .eslintrc* config file, so that eslint-config-prettier has the opportunity to override other configs"
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["__tests__/**", "**/*.spec.js", "**/*.test.js"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "jest/no-focused-tests": "error",
        "jest/no-disabled-tests": "warn",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }],
    "no-console": "warn",
    "no-restricted-syntax": ["error", "ImportDeclaration"],
  },
};
