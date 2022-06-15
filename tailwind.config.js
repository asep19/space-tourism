/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'blue-charcoal': '#0b0d17',
        'tropical-blue': '#d0d6f9'
      },
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif']
      }
    },
  },
  plugins: [],
}
