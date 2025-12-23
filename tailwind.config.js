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
        // MAPPED TO PROFESSIONAL GREEN & WHITE THEME
        pastel: {
          // Previously Purple -> Now PRIMARY GREEN (Emerald)
          purple: '#10B981',        // Emerald 500 (Primary Brand Color)
          'purple-dark': '#047857', // Emerald 700 (Hover/Dark Text)
          'purple-light': '#ECFDF5',// Emerald 50 (Very light background)

          // Previously Mint -> Now ACCENT GREEN (Teal)
          mint: '#14B8A6',          // Teal 500
          'mint-dark': '#0F766E',   // Teal 700
          'mint-light': '#F0FDFA',  // Teal 50

          // Previously Blue -> Now CORPORATE SLATE/NAVY (Professional Contrast)
          blue: '#334155',          // Slate 700
          'blue-dark': '#0F172A',   // Slate 900
          'blue-light': '#F1F5F9',  // Slate 100

          // Previously Lavender -> Now NEUTRAL GRAY
          lavender: '#94A3B8',      // Slate 400
          'lavender-dark': '#475569',
          'lavender-light': '#F8FAFC',

          // Previously Peach -> Now SUBTLE LIME
          peach: '#84CC16',         // Lime 500
          'peach-dark': '#4D7C0F',
          'peach-light': '#F7FEE7',

          // Previously Pink -> Now ALERT/HIGHLIGHT (Rose - kept for variety but muted)
          pink: '#F43F5E',          
          'pink-dark': '#BE123C',
          'pink-light': '#FFF1F2',
        },
        // Dark Mode: Deep Forest/Slate
        dark: {
          bg: '#022C22',            // Very dark green/black
          surface: '#064E3B',       // Dark Emerald
          'surface-light': '#065F46', 
          text: '#ECFDF5',          // Light Mint text
          muted: '#A7F3D0',         // Soft Green text
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