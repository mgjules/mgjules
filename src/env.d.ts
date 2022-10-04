interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly DIRECTUS_URL: string
  readonly DIRECTUS_STATIC_TOKEN: string
  readonly EDGEDB_DSN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
