/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Mulish: "Mulish",
      },
      backgroundImage: {
        testamonialBG: "url('/src/images/testamonialBG.png')",
      },
    },
  },
  plugins: [],
};
