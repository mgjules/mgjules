interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly DIRECTUS_URL: string
  readonly DIRECTUS_STATIC_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}