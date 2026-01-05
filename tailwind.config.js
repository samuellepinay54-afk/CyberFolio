/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors (cyber theme)
        'cyber-dark': {
          primary: '#141b2d',
          secondary: '#141b2d',
          tertiary: '#141b2d',
          card: '#141b2d',
        },
        // Light mode colors
        'cyber-light': {
          primary: '#ffffff',
          secondary: '#f5f5f5',
          tertiary: '#e8e8e8',
          card: '#ffffff',
        },
        // Accent colors
        accent: {
          primary: '#3b82f6',
          secondary: '#10b981',
        },
        // Text colors
        text: {
          primary: '#e0e7ff',
          secondary: '#a5b4fc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

