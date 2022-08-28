/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const newScreens = Object.entries(defaultTheme.screens).reduce(
  (breakpoints, [label, value]) => {
    if (label == "lg") {
      breakpoints["bg"] = "900px";
    }
    breakpoints[label] = value;
    return breakpoints;
  },
  {}
);

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      bg: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      transitionProperty: {
        DEFAULT: defaultTheme.transitionProperty.DEFAULT + ", height, ",
        filter: "filter",
      },
      colors: {
        primaryBackground: "#3C493F",
        secondaryBackground: "#7E8D85",
        primaryTextColor: "#B3BFB8",
        secondaryTextColor: "#A2E3C4",
      },
      boxShadow: {
        card: "9px 8px 9px 0px rgba(66, 68, 90, 1)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      code: [
        "Consolas",
        "Monaco",
        "Lucida Console,Liberation Mono",
        "DejaVu Sans Mono,Bitstream Vera Sans Mono",
        "Courier New",
      ],
    },
  },
  plugins: [],
};
