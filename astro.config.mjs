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
import transformerDirective from '@unocss/transformer-directives'
import { theme } from '@unocss/preset-mini'

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
        'pill': 'w-fit border border-brand-secondary/50 py-1 px-2 text-xs text-brand-primary/90 shadow-md select-none',
        'btn': 'inline-block px-3 py-2 transition-all decoration-none border border-brand-accent text-brand-primary shadow-md hover:shadow-sm'
      },
      theme: {
        colors: {
          brand: {
            foreground: '#252D38',
            background: '#191F28',
            primary: theme.colors.gray[300],
            secondary: theme.colors.gray[500],
            tertiary: theme.colors.gray[600],
            accent: theme.colors.cyan[500]
          }
        }
      },
      presets: [
        presetUno(),
        presetTypography({
          cssExtend: {
            'h1,h2,h3,h4,h5,h6': {
              color: theme.colors.gray[300],
            },
            'a,code': {
              color: theme.colors.cyan[500]
            },
            'a:hover': {
              color: theme.colors.cyan[400]
            }
          }
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Open Sans',
            mono: ['Fira Code', 'Fira Mono:400,700']
          }
        })
      ],
      transformers: [
        transformerDirective()
      ]
    }),
    svelte(),
    compress(),
    sitemap()
  ]
})