/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        diamondPrimary: "#3655A0",
        diamondGray: "#D6D6D6",
      },
    },
  },
  plugins: [],
};
