/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_PASSWORD?: string
  readonly VITE_CAMPAIGN_ACCESS_CODE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
