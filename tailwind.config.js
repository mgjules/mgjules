const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./layouts/**/*.html", './content/**/*.md'],
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
