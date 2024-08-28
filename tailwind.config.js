/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        diamondPrimary: "#3655A0",
        diamondGray: "#D6D6D6",
        diamondBlack1: "#212121E0",
        diamondBlack2: "#212121C7",
        disabled: "#C1C1C1",
      },
    },
  },
  plugins: [],
};
