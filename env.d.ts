/// <reference types="vite/client" />

interface ImportMetaEnv {
  // import.meta.env.PUBLIC_FOO
  readonly PUBLIC_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
