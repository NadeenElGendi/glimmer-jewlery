/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        olive: "#1E3231",
        beige: "#F0E5D3",
      },
      fontFamily: {
        harmattan: ['"Harmattan"', "Arial", "sans-serif"],
        cursive: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true,
    themes: ["light"],
  },
};
