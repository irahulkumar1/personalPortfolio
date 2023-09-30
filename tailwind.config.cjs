/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textHeaderColor: "#8c90aa",
        textColor: "#4e5463",
        darkHeadingColor: "#3e4355",
        highLighter : "#ff033e",
      },
    },
  },
  plugins: [],
};
