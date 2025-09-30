/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",  // Adjust if your components are in a different folder
  ],
  theme: {
    extend: {},  // Add custom colors, fonts, etc., here
  },
  plugins: [],
};