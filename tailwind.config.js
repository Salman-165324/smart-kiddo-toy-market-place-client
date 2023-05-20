/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4ee7c',
        accent: '#c15352',
        neutral1: '#fefce8' // for text and normal website bg
        // ...
      }
    },
  },
  plugins: [require("daisyui")],
}

