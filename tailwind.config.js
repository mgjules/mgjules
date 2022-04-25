const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["docs/**/*.html", "layouts/**/*.html",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
