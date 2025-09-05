import js from '@eslint/js';
import ts from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
<<<<<<< HEAD
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
=======
      parser: astro.parser,
      parserOptions: { parser: ts.parser }
    }
  }
];
>>>>>>> parent of 17139dc (Merge branch 'main' into codex/configure-seo,-accessibility,-performance-features)
