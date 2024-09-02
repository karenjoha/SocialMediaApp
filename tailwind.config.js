/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Balsamiq Sans", "sans-serif"],
        serif: ["IBM Plex Serif", "serif"],
      },
      colors:{
        roseColor: 'rgb(252,115,113)'
      }
    },
  },
  plugins: [],
};
