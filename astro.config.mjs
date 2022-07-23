import { defineConfig } from "astro/config"

import uno from "astro-uno"
import { presetAttributify, presetUno, presetTypography } from "unocss"
import presetIcons from "@unocss/preset-icons"
import compress from "astro-compress"
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';

// Icons
import sections from "./data/sections.json" assert {type: "json"}
import technologies from "./data/technologies.json" assert {type: "json"}
import awards from "./data/awards.json" assert {type: "json"}
import links from "./data/links.json" assert {type: "json"}
import languages from "./data/languages.json" assert {type: "json"}
import interests from "./data/interests.json" assert {type: "json"}

// https://astro.build/config
export default defineConfig({
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
        ...Array.from(interests.interests, int => `i-${int.icon}`)
      ],
      presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(),
        presetIcons({
          autoInstall: true
        })
      ],
    }),
    svelte(),
    compress(),
    sitemap()
  ],
  vite: {
    plugins: []
  },
})