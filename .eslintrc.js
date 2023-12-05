module.exports = {
  rules: {
    "import/no-named-as-default": "off",
    "import/namespace": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
    "react/prop-types": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-var": "error",
    "no-mixed-spaces-and-tabs": "off",
    "semi": "off",
    "no-multiple-empty-lines": "off",
    "prefer-const": "warn",
    "no-use-before-define": "off",
    "no-extra-boolean-cast": 1,
    "new-parens": 1,
    "no-unused-vars": "off",
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
  ],

  parser: "@babel/eslint-parser", // Парсер для обработки jsx кода

  parserOptions: {
    requireConfigFile: false,

    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11, // версия стандарта JavaScript. Последний 12 (2021).
    sourceType: "module", // Позволяет использовать import/export
  },

  plugins: ["react"],

  settings: {
    react: {
      version: "detect", // 'detect' автоматически определит версию React
    },
  },
};
