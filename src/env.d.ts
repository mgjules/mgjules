interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly EDGEDB_DSN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
