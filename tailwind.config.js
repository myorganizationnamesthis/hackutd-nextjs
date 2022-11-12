/** @type {import('tailwindcss').Config} */
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
  plugins: [require('@tailwindcss/line-clamp')],
}
