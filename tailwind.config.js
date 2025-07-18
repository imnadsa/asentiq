/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'styrene-a': ['var(--font-styrene-a)', 'sans-serif'],
        'styrene-b': ['var(--font-styrene-b)', 'sans-serif'],
        'tiempo': ['var(--font-tiempo)', 'serif'],
      },
      colors: {
        // Цвета добавим позже
      },
      animation: {
        // Анимации добавим позже
      }
    },
  },
  plugins: [],
}
