/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#2D1F1A',
        'brand-gold': '#C9A961',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
