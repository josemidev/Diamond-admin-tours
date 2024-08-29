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
        diamonddBlack3: "#000000E0",
        disabled: "#C1C1C1",
        border: "#E5E5E5",
        //status
        unrevised: "#212121C7",
        review: "#E1AB3F",
        approved: "#397367",
        rejected: "#D34E24",
      },
    },
  },
  plugins: [],
};
