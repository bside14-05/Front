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
      colors: {
        gray: {
          1: "#212121",
          2: "#2A2A2A",
          3: "#333333",
          4: "#4E4E4E",
          5: "#666666",
          6: "#878787",
          7: "#878787",
          8: "#A5A5A5",
          9: "#C4C4C4",
          10: "#D1D1D1",
          11: "#f5f5f5f5",
          12: "#FDFDFD",
        },
        dim1: "rgba(0, 0, 0, 0.5)",
        dim2: "rgba(0, 0, 0, 0.9)",
      },
      fontFamily: {
        sans: ["var(--font-main)"],
      },

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
