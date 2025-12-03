/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'bg-pastel-purple-light',
    'bg-pastel-purple',
    'bg-pastel-purple-dark',
    'text-pastel-purple-light',
    'text-pastel-purple',
    'text-pastel-purple-dark',
    'border-pastel-purple-light',
    'border-pastel-purple',
    'border-pastel-purple-dark',
    'text-pastel-blue-dark',
    'text-pastel-blue',
    'text-pastel-pink-dark',
    'text-pastel-pink',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          purple: '#9B7EDE',
          'purple-dark': '#7C5FBE',
          'purple-light': '#E6DEF7',
          mint: '#6BC4A6',
          'mint-dark': '#4FA385',
          'mint-light': '#E0F5EF',
          blue: '#6B9ADE',
          'blue-dark': '#5A7FC8',
          'blue-light': '#E0EDF7',
          lavender: '#B595DE',
          'lavender-dark': '#9B7EDE',
          'lavender-light': '#F0E8F7',
          peach: '#D49B7E',
          'peach-dark': '#BE7C5F',
          'peach-light': '#F7E6DE',
          pink: '#D97E9B',
          'pink-dark': '#C75A7A',
          'pink-light': '#F7DEE6',
        },
        dark: {
          bg: '#1a1a2e',
          surface: '#16213e',
          'surface-light': '#0f3460',
          text: '#eaeaea',
          muted: '#b8b8b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
