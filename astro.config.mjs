// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import tailwindConfig from './tailwind.config.js';

// https://astro.build/config
export default defineConfig({
  vite: {
<<<<<<< HEAD
    plugins: [tailwindcss()], // ← sin argumentos
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
=======
      // @ts-expect-error plugin lacks types for config option
      plugins: [tailwindcss({ config: tailwindConfig })],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  });
>>>>>>> parent of 17139dc (Merge branch 'main' into codex/configure-seo,-accessibility,-performance-features)
