/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts,jsx,js}'], // Ensure this includes About.tsx
  theme: {
    extend: {
        textColor: {
        DEFAULT: '#000000', // Set default text color to black
      },
      colors: {
        'custom-blue': '#1E3A8A',
      },
    },
  },
  plugins: [],
};