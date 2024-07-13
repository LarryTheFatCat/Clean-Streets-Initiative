/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        JustAnotherHand: ['Just Another Hand', 'cursive'],
      },
      colors: {
        'Silver-Gray': "#D9D9D9",
        'Midnight-Blue': "#2B2F53"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}