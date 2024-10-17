/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#151C25",
        secondaryColor: "#55E5A4",
        whiteColor: "#E3E3E3",
        greyColor: "#A9A9A9",
        blueGreyColor: "#26313F",
        purpleColor: "#2E0249",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"], // Set your custom font as the default sans font
      },
    },
  },
  plugins: [],
};
