/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        "primary": "#31065A", 
        "secondary": "#170550",
        "accent": "#F86F03",
      },
      fontFamily: {
        sans: 'Poppins',
      },
      screens: {
        'lg': '992px',
      },
      listStyleType: {
        disc: 'disc',
        decimal: 'decimal',
      },
    },
  },
  plugins: [],
}