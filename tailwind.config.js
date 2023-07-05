/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

