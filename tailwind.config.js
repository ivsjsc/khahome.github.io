/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#D4AF37',
        'primary-gold-dark': '#B8941F',
        'primary-gold-light': '#E8C956',
        'primary-navy': '#2C4563',
        'primary-navy-dark': '#1A2A3A',
        'primary-navy-light': '#4A6B8A',
        'accent-purple': '#7B2CBF',
        'accent-purple-dark': '#5A1F8F',
        'accent-purple-light': '#9D4ED6',
        'dark-contrast': '#0f172a',
        'light-contrast': '#f8fafc'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
