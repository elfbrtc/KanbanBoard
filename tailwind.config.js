/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(hand.cur), pointer',
      },
      colors: {
        'regal-pink': '#243c5a',
        'nav-bar-color': '#282c3c',
      },
    },
  },
  plugins: [],
}
