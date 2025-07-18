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
        // Anthropic inspired colors
        'cream': '#f5f2ed',           // основной фон
        'cream-dark': '#e6e0d7',      // границы, разделители  
        'text-primary': '#1a1a1a',    // заголовки
        'text-secondary': '#444444',  // основной текст
        'text-muted': '#6b7280',      // вторичный текст
        
        // Твой фиолетовый акцент
        'accent': {
          50: '#eef2ff',   // очень светлый
          100: '#e0e7ff',  // светлый фон
          300: '#a5b4fc',  // светлый
          500: '#6366f1',  // основной
          600: '#4f46e5',  // hover
          700: '#4338ca',  // темный
          900: '#312e81',  // очень темный
        }
      },
      animation: {
        // Анимации добавим позже когда будем делать Hero
      }
    },
  },
  plugins: [],
}
