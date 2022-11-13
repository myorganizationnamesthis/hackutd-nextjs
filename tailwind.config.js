/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3477eb",
        "secondary": "#3455eb",
        "highlight": "#F4F7F5",
        "accent": "#A7A2A9",
        "background": "#111111",
        "error": "#dc2626",
      }
    },
  },
  plugins: [],
}
