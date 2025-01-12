/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00563B',
        texts:"#FEBE10",
        appblue:'#0000FF'
      }
    },
  },
  plugins: [],
}