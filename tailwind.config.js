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
    extend: {},
  },
  plugins: [],
};
