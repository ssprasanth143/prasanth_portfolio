/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#0f1724',
        'accent': '#2563eb',
        'soft': '#f4f6fa'
      }
    },
  },
  plugins: [],
}