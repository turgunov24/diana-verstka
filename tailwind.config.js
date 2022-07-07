/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { noto: "'Noto Sans', sans-serif;" },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
