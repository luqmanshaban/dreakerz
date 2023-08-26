/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#14161B',
        btn: '#c5374f',
        txt: '#fff'
      }
    },
  },
  plugins: [],
}