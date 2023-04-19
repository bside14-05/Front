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
      theme: {
        colors: {
          gray1: "#212121",
          gray2: "#2A2A2A",
          gray3: "#333333",
          gray4: "#4E4E4E",
          gray5: "#666666",
          gray6: "#878787",
          gray7: "#878787",
          gray8: "#A5A5A5",
          gray9: "#C4C4C4",
          gray10: "#D1D1D1",
          gray11: "#f5f5f5f5",
          gray12: "#FDFDFD",
          dim1: "rgba(0, 0, 0, 0.5)",
          dim2: "rgba(0, 0, 0, 0.9)",
        },
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
