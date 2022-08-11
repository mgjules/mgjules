import { defineConfig } from 'astro/config'

// Astro Plugins
import compress from 'astro-compress'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'

// Astro Adapter
import netlify from '@astrojs/netlify/functions'

// Uno CSS
import uno from 'astro-uno'
import { presetUno, presetTypography } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: 'server',
  site: 'https://mgjules.dev',
  experimental: { integrations: true },
  integrations: [
    uno({
      safelist: [
        ...['text-xl', 'font-semibold', 'font-light', 'sm:mt-2', 'text-red']
      ],
      presets: [
        presetUno(),
        presetTypography({
          cssExtend: {
            'a,code': {
              color: '#0891b2',
            },
            'a:hover': {
              color: '#22d3ee',
            },
          },
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Open Sans',
            mono: ['Fira Code', 'Fira Mono:400,700']
          }
        })
      ],
    }),
    svelte(),
    compress(),
    sitemap()
  ]
})