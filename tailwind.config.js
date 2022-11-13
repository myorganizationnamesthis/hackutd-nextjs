/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

const flipCard = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.left-rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  })
})

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3477eb",
        "secondary": "#3455eb",
        "highlight": "#F4F7F5",
        "accent": "#A7A2A9",
        "accent2": "#739de6",
        "background": "#111111",
        "error": "#dc2626",
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), flipCard],
}
