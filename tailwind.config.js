/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(15rem, 1fr))",
        contextUl: "repeat(auto-fit, minmax(18rem, 10rem))",
      },
    },
  },
  plugins: [],
};
