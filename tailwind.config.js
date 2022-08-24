/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js}"],
  theme: {
    extend: {
      screens: {
        bg: "900px",
      },
      transitionProperty: {
        DEFAULT: defaultTheme.transitionProperty.DEFAULT + ", height, ",
        filter: "filter",
      },
      colors: {
        primaryBackground: "#3C493F",
        secondaryBackground: "#7E8D85",
        textColor: "#B3BFB8",
      },
    },
  },
  plugins: [],
};
