const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		  },
		  typography: {
			  DEFAULT: {
				  css: {
					  "code::before": {content: ''},
					  "code::after": {content: ''}
				  }
			  }
		  }
		},
  },
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
