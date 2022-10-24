module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本，你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    sourceType: "module", // 设置为 `"script"` (默认) 或 `"module"`（如果你的代码是 ECMAScript 模块)。
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "no-var": "error",
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-key": 0,
    "react/no-children-prop": 0,
    "no-console": 0,
    "no-undef": 0,
    "no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
    "eslint-disable-next-line": 0,
  },
};
