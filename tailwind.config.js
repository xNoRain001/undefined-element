/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      keyframes: {
        'u-slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'u-slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'u-slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'u-slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'u-slide-down': 'u-slide-down var(--u-transition-duration)',
        'u-slide-up': 'u-slide-up var(--u-transition-duration)',
        'u-slide-right': 'u-slide-right var(--u-transition-duration)',
        'u-slide-left': 'u-slide-left var(--u-transition-duration)'
      }
    },
  },
  plugins: [],
}

