/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        JustAnotherHand: ['Just Another Hand', 'cursive'],
        Junge: ["Junge", 'cursive'],
        KyivType: ["KyivType Sans Heavy3"],

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