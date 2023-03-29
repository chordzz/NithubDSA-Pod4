/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        note1: "#FA7373",
        note2: "#F7D44C",
        note3: "#F6ECC9",
        note4: "#98B7DB",
        note5: "#A8D672",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
