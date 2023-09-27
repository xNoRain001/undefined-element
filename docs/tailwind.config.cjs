/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.vue",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      min960: '960px'
    }
  },
  plugins: [],
}

