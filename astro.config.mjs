// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import tailwindConfig from './tailwind.config.js';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss({ config: tailwindConfig })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
