/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],

}