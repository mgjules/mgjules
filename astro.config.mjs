import { defineConfig } from "astro/config"

import uno from "astro-uno"
import { presetUno, presetTypography } from "unocss"
import compress from "astro-compress"
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  site: "https://mgjules.dev",
  experimental: { integrations: true },
  integrations: [
    uno({
      safelist: [
        ...["text-xl", "font-semibold", "font-light", "sm:mt-2", "text-red"]
      ],
      presets: [
        presetUno(),
        presetTypography({
          cssExtend: {
            'h1,h2,h3,h4,a,code': {
              color: '#0891b2',
            },
            'a:hover': {
              color: '#22d3ee',
            },
          },
        })
      ],
    }),
    svelte(),
    compress(),
    sitemap()
  ],
  vite: {
    build: {
      ssr: true
    }
  },
})