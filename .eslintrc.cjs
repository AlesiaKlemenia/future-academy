module.exports = {
  root: true,
  "env":{
    "browser":true,
    "es2021":true
  },
  extends: [
    'eslint:recommended',
    "airbnb",
    "airbnb-typescript",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    "prettier/prettier",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react',
    "@typescript-eslint",
    'react-hooks',
    'jsx-a11y',
    'prettier',
    "simple-import-sort",
    "import",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"]
    }
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-nested-ternary": "off",
    "react/function-component-definition": [2, { "namedComponents": "arrow-function" }],
    "no-use-before-define":"off",
    "@typescript-eslint/no-use-before-define":[
      "error"
    ],
    "react/jsx-filename-extension":[
      "warn",
      {
        "extensions":[
          ".tsx"
        ]
      }
    ],
    "import/extensions":[
      "error",
      "ignorePackages",
      {
        "js":"never",
        "jsx":"never",
        "ts":"never",
        "tsx":"never"
      }
    ],
    "no-shadow":"off",
    "@typescript-eslint/no-shadow":[
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type":[
      "error",
      {
        "allowExpressions":true
      }
    ],
    "@typescript-eslint/lines-between-class-members":0,
    "max-len":[
      "warn",
      {
        "code":80
      }
    ],
    "react-hooks/rules-of-hooks":"error",
    "react-hooks/exhaustive-deps":"warn",
    "import/prefer-default-export":"off",
    "react/prop-types":"off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "no-console": ["error", { "allow": ["error", "warn"] }],
    "no-underscore-dangle": "off",
    "react/no-array-index-key": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  },
}
