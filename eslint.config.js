// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

export default [
  // Ignorar artefactos
  { ignores: ["dist/**", "node_modules/**", ".astro/**"] },

  // Reglas base JS
  eslint.configs.recommended,

  // TypeScript (para .ts/.tsx)
  ...tseslint.configs.recommended,

  // Astro recomendado
  ...astro.configs["flat/recommended"],

  // ✅ Forzar parser correcto para .astro y permitir TS dentro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        // Usa el parser de TS para <script> en .astro
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  // Ajustes suaves para empezar (menos ruido)
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { URL: "readonly" },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];

