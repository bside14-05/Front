/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,js,tsx,ts}",
    "./src/components/**/*.{html,js,tsx,ts}",
  ],
  theme: {
    screens: {
      sm: { min: "375px", max: "767px" },
      md: "768px",
    },
    extend: {
      keyframes: {
        "bottom-sheet-up": {
          "0%": { transform: "translateY(420px)" },
          "100%": { transform: "translateY(0)" },
        },
        "bottom-sheet-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(420px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
