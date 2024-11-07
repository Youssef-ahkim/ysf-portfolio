/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This scans all files in the src directory
    "./public/index.html"          // Include HTML files if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
