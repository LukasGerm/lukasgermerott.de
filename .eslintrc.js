export default {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/jest"],
  ignorePatterns: ["./node_modules"],
  rules: {
    indent: 0,
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
};
