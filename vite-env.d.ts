/// <reference types="vite/client" />


interface ImportMetaEnv {
  VITE_UNSPLASH_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
