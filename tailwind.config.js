/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff66c1',
        black:'#000000'
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}