import { defineConfig } from "astro/config"

import uno from "astro-uno"
import { presetUno, presetTypography, presetAttributify } from "unocss"
import presetIcons from "@unocss/preset-icons"
import compress from "astro-compress"
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import netlify from '@astrojs/netlify/functions'

// Icons
import sections from "./data/cv/sections.json" assert {type: "json"}
import technologies from "./data/cv/technologies.json" assert {type: "json"}
import awards from "./data/cv/awards.json" assert {type: "json"}
import links from "./data/links.json" assert {type: "json"}
import languages from "./data/cv/languages.json" assert {type: "json"}
import interests from "./data/cv/interests.json" assert {type: "json"}

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: "server",
  site: "https://mgjules.dev",
  experimental: { integrations: true },
  integrations: [
    uno({
      safelist: [
        ...Array.from(sections.sections, sec => `i-${sec.icon}`),
        ...Array.from(technologies.technologies, tech => `i-${tech.icon}`),
        ...Array.from(awards.awards, aw => `i-${aw.icon}`),
        ...Array.from(links.links, link => `i-${link.icon}`),
        ...Array.from(languages.languages, lang => `i-${lang.icon}`),
        ...Array.from(interests.interests, int => `i-${int.icon}`),
        ...["i-ooui:article-not-found-ltr", "i-carbon:document"]
      ],
      presets: [
        presetAttributify(),
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
        }),
        presetIcons({
          autoInstall: true
        })
      ],
    }),
    svelte(),
    sitemap()
  ],
  vite: {
    plugins: []
  },
})