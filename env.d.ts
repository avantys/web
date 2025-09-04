/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly PUBLIC_INDEXABLE: 'true' | 'false';
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
