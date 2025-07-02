/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'racing': ['Racing Sans One', 'cursive'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'border': '#2a2a2a',
        'neon-blue': '#00FFFF',
        'neon-green': '#39FF14',
        'neon-purple': '#7B68EE',
        'carbon': '#1a1a1a',
        'carbon-light': '#2a2a2a',
        'carbon-dark': '#0a0a0a',
      },
      backgroundImage: {
        'carbon-fiber': 'linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%, #2a2a2a)',
        'chrome': 'linear-gradient(45deg, #c0c0c0, #f0f0f0, #c0c0c0, #a0a0a0)',
        'neon-gradient': 'linear-gradient(45deg, #00FFFF, #39FF14, #7B68EE)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'rev': 'rev 0.3s ease-out',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '100%': { boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rev: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
            opacity: '0.8'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(57, 255, 20, 0.6), 0 0 30px rgba(57, 255, 20, 0.4)',
            opacity: '1'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};