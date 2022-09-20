/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#88c8bc',
        secondary: '#595959',
      },
      fontFamily: {
        // Rokkitt: '"Rokkitt", Georgia, serif',
        Rokkitt: '"Oswal", Arial, sans-serif',
      },
    },
  },
  plugins: [],
  important: true,
};
