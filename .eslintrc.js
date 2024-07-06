module.exports = {
  extends: ["jaypie/commonjs", "plugin:jest/recommended"],
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
};
