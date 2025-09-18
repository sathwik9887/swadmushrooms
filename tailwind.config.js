/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        "portfolio-bg": "url('/src/assets/bg.jpg')",
      },
      blur: {
        tiny: "1px",
      },
      colors: {
        "dark-bg": "#2d2d2d",
        "dark-text": "#ffffff",
        "light-bg": "#ffffff",
        "light-text": "#000000",
      },
    },
  },
  plugins: [],
};
