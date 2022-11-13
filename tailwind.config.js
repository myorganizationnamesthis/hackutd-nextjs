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
        primary: '#3477eb',
        secondary: '#3455eb',
        background: '#111111',
      },
      lineClamp: {
        8: '8',
        10: '10',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), flipCard],
}
