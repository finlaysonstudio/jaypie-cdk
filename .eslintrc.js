module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
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
    "no-console": "warn",
    "no-restricted-syntax": ["error", "ImportDeclaration"]
  },
};
