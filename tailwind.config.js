/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#b7d7ff",
          300: "#8cbcff",
          400: "#5e9cff",
          500: "#3d7ef5",
          600: "#2d62d8",
          700: "#244db1",
          800: "#1f438f",
          900: "#1e3a72"
        }
      }
    },
  },
  plugins: [],
};
