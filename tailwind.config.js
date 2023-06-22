/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      lgMax1: {max: '1500px'},
      lgMax: {max: '1300px'},
      lg2: {max: '1170px'},
      lg3: {max: '1100px'},
      lg4: {max: '1060px'},
      md2: {max: '850px'},
      sm2: {max: '770px'},
      xs2: {max: '580px'},
      xs3: {max: '460px'},
    }
  },
  plugins: [],
}

