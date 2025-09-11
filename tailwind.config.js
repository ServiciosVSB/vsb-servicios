/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta VSB
        brand: {
          300: "#8A90E6", // claro (para hover de texto/bordes)
          400: "#6670DB", // medio-claro
          500: "#3F48CC", // principal
          600: "#343CAA", // oscuro (botones/badges)
          700: "#283089", // más oscuro (hover)
        },
        accent: {
          DEFAULT: "#545454", // gris del logo
          400: "#6B6B6B",
          600: "#3F3F3F",
        },
      },
      fontFamily: {
        // cuerpo (Rubik)
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // títulos (Monoton)
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
