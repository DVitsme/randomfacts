/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      display: ['"Open Sans"', 'sans-serif'],
      body: ['"Open Sans"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      height: {
        '1/2-screen': '50vh'
      }
    }
  },
  plugins: []
};
