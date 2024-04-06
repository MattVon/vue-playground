module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@babel/eslint-parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
  ],
  rules: {
    "max-len": "off",
    "quotes": [
      "error",
      "double",
    ],
    "semi": [
      "error",
      "always",
    ],
  },
};
