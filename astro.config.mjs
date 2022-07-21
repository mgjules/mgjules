import { defineConfig } from "astro/config"

import unocss from "@unocss/vite"
import { presetAttributify, presetUno, presetTypography } from "unocss"
import presetIcons from "@unocss/preset-icons"
import compress from "astro-compress"

// Icons
import sections from "./src/data/sections.json" assert {type: "json"}
import technologies from "./src/data/technologies.json" assert {type: "json"}
import awards from "./src/data/awards.json" assert {type: "json"}
import links from "./src/data/links.json" assert {type: "json"}
import languages from "./src/data/languages.json" assert {type: "json"}
import interests from "./src/data/interests.json" assert {type: "json"}

// https://astro.build/config
export default defineConfig({
  experimental: { integrations: true },
  integrations: [
    compress()
  ],
  vite: {
    plugins: [
      unocss({
        safelist: [
          ...Array.from(sections, sec => `i-${sec.icon}`),
          ...Array.from(technologies, tech => `i-${tech.icon}`),
          ...Array.from(awards, aw => `i-${aw.icon}`),
          ...Array.from(links, link => `i-${link.icon}`),
          ...Array.from(languages, lang => `i-${lang.icon}`),
          ...Array.from(interests, int => `i-${int.icon}`)
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
    ]
  },
})