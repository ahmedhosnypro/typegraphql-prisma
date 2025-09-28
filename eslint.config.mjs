import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const tsEslintModule = await import("@typescript-eslint/eslint-plugin");
const tsEslintPlugin = tsEslintModule.default;
const tsEslintRecommended = tsEslintModule.default.configs.recommended;
const tsEslintParser = (await import("@typescript-eslint/parser")).default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      ...tsEslintRecommended.rules,
      "no-console": "error",
    },
  },
  {
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        // Don't use project-based linting for storybook files
        // to avoid the tsconfig include issues
      },
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      // Use basic rules without type-aware linting
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];

export default eslintConfig;
