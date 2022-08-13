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
      shortcuts: {
        'pill': 'w-fit border border-brand-secondary/50 py-1 px-2 text-xs text-brand-primary/90 shadow-md select-none'
      },
      theme: {
        colors: {
          'brand': {
            'background': '#191F28',
            'primary': '#9ca3af', // text-gray-400
            'secondary': '#6b7280', // text-gray-500
            'accent': '#06b6d4' // text-cyan-500
          }
        }
      },
      presets: [
        presetUno(),
        presetTypography({
          cssExtend: {
            'a,code': {
              color: '#06b6d4', // text-cyan-500
            },
            'a:hover': {
              color: '#22d3ee', // text-cyan-400
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