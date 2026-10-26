/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CAMPAIGN_ACCESS_CODE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
