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
          200: '#c7d2fe',  // светлый
          300: '#a5b4fc',  // светлый
          400: '#818cf8',  // средний
          500: '#6366f1',  // основной
          600: '#4f46e5',  // hover
          700: '#4338ca',  // темный
          800: '#3730a3',  // более темный
          900: '#312e81',  // очень темный
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 25px 0 rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 40px 0 rgba(0, 0, 0, 0.15)',
        'accent': '0 4px 20px 0 rgba(99, 102, 241, 0.2)',
      },
      height: {
        '13': '3.25rem',
        '15': '3.75rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
