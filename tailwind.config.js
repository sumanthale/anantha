/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F6FF',
          100: '#F1ECFF',
          200: '#E4D9FF',
          300: '#D1BFFF',
          400: '#B89FFF',
          500: '#9966CC', // Amethyst
          600: '#8B5CF6',
          700: '#7C3AED',
          800: '#6D28D9',
          900: '#5B21B6',
          950: '#4C1D95',
        },
        lavender: {
          50: '#FDFCFF',
          100: '#FAF8FF',
          200: '#F3EFFF',
          300: '#E9E1FF', // Main lavender
          400: '#DDD1FF',
          500: '#C4B0FF',
          600: '#A585FF',
          700: '#8B5CF6',
          800: '#7C3AED',
          900: '#6D28D9',
        },
        plum: {
          50: '#FDF8FF',
          100: '#FAF1FF',
          200: '#F4E3FF',
          300: '#EDD5FF',
          400: '#E4C7FF',
          500: '#D1BFFF',
          600: '#B89FFF',
          700: '#9966CC',
          800: '#7C3AED',
          900: '#5C246E', // Deep plum
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.25)',
          dark: 'rgba(0, 0, 0, 0.25)',
        },
        dark: {
          bg: '#0F0B1A',
          surface: '#1A1625',
          card: '#252033',
          text: '#F8F7FB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(153, 102, 204, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(153, 102, 204, 0.6)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neumorphic': '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
        'neumorphic-dark': '20px 20px 60px #0a0a0a, -20px -20px 60px #1a1a1a',
        'glow': '0 0 20px rgba(153, 102, 204, 0.3)',
        'glow-lg': '0 0 40px rgba(153, 102, 204, 0.4)',
      },
    },
  },
  plugins: [],
};