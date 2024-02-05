export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#25BE9F",
        primaryLight: "#26ccaa",
        primaryHover: "#1c9179",
        background: "#232323",
        card: "#191919",
        cardHover: "#1e1e1e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
