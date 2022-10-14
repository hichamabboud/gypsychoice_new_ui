/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary : '#fff343',
      secondary : '#fff343',
      tertiary : 'blue',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Montserrat : ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}
