"use strict";

const { defineConfig } = require("eslint/config");

const sortDestructureKeys = require("eslint-plugin-sort-destructure-keys");
const typescriptSortKeys = require("eslint-plugin-typescript-sort-keys");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends("prettier"),

    plugins: {
      "sort-destructure-keys": sortDestructureKeys,
      "typescript-sort-keys": typescriptSortKeys,
    },

    rules: {
      "@typescript-eslint/naming-convention": "off",

      "func-style": [
        "error",
        "expression",
        {
          allowArrowFunctions: true,
        },
      ],

      "import-x/namespace": "off",
      "import-x/no-default-export": "error",

      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: false,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],

      "import-x/no-namespace": "error",

      "import-x/order": [
        "error",
        {
          alphabetize: {
            caseInsensitive: true,
            order: "asc",
          },

          "newlines-between": "never",
        },
      ],

      "no-console": "error",

      "object-shorthand": [
        "error",
        "always",
        {
          avoidExplicitReturnArrows: true,
        },
      ],

      "sort-destructure-keys/sort-destructure-keys": [
        "error",
        {
          caseSensitive: false,
        },
      ],

      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],

      "sort-keys": [
        "error",
        "asc",
        {
          caseSensitive: false,
          minKeys: 2,
          natural: true,
        },
      ],

      "typescript-sort-keys/interface": "error",
      "typescript-sort-keys/string-enum": "error",
    },
  },
  {
    files: ["**/*.ts"],

    rules: {
      "@typescript-eslint/consistent-indexed-object-style": [
        "error",
        "index-signature",
      ],
      "@typescript-eslint/restrict-template-expressions": "off",
      "default-case": "off",
    },
  },
]);
