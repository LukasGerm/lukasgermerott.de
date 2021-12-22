module.exports = {
  content: [
    "./app/**/*.tsx",
    "./app/**/*.jsx",
    "./app/**/*.js",
    "./app/**/*.ts",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#25BE9F",
        primaryHover: "#1c9179",
        background: "#4D4D4D",
        card: "#3C3C3C",
        cardHover: "#292929",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
