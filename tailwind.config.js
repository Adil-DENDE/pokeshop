/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import tailwindcss from 'tailwindcss-animated'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    daisyui: {
      themes: ["light", "dark", "valentine"],
    },
  },
  plugins: [
    daisyui,
    tailwindcss
  ],
}

