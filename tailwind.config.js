/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F2FF',
          100: '#EDE6FF',
          200: '#DDD1FF',
          300: '#C4B0FF',
          400: '#A585FF',
          500: '#9966CC', // Amethyst
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        lavender: {
          50: '#FAF9FB',
          100: '#F4F1F7',
          200: '#E9E2EF',
          300: '#D6C6E1', // Main lavender
          400: '#C3AAD3',
          500: '#B08EC5',
          600: '#9D72B7',
          700: '#8A56A9',
          800: '#773A9B',
          900: '#641E8D',
        },
        plum: {
          50: '#F7F5F8',
          100: '#EFEBF1',
          200: '#DFD7E3',
          300: '#CFC3D5',
          400: '#BFAFC7',
          500: '#AF9BB9',
          600: '#9F87AB',
          700: '#8F739D',
          800: '#7F5F8F',
          900: '#5C246E', // Deep plum
        },
        dark: {
          bg: '#1E1B2E',
          surface: '#2C2340',
          text: '#F1F0F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};