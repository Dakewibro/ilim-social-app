import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mediterranean-inspired palette - soft, natural, lived-in
        calcarioCream: '#F5F1E8',    // Color 1 - Pale chalky neutral
        pedreiraPink: '#D4A394',     // Color 2 - Soft terracotta-pink
        solarTerracotta: '#E8A55C',  // Color 3 - Golden-orange hue
        azulejoTaupe: '#B09A88',     // Color 4 - Warm stony taupe
        olivalVerde: '#9BA17F',      // Color 5 - Dusty olive green
        cafeEscuro: '#4A3F35',       // Color 6 - Deep espresso brown
        darkText: '#4A3F35',         // Use Café Escuro for text
        
        // Extended palette based on Mediterranean colors
        primary: {
          50: '#fef9f5',
          100: '#fdf3e9',
          200: '#fae7d3',
          300: '#f6d8b8',
          400: '#f1c589',
          500: '#E8A55C',  // Solar Terracotta
          600: '#d48f45',
          700: '#b57637',
          800: '#93602e',
          900: '#774d26',
        },
        accent: {
          50: '#fdf6f4',
          100: '#f9ede9',
          200: '#f2dad3',
          300: '#e8c3b6',
          400: '#dca699',
          500: '#D4A394',  // Pedreira Pink
          600: '#c08777',
          700: '#a56d5f',
          800: '#88584c',
          900: '#6f483e',
        },
        beige: {
          50: '#fdfcfa',
          100: '#F5F1E8',  // Calcário Cream
          200: '#ede8dc',
          300: '#e3dbc9',
          400: '#d4c9b0',
          500: '#B09A88',  // Azulejo Taupe
          600: '#9d8774',
          700: '#836f5e',
          800: '#6b5b4d',
          900: '#584b40',
        },
        purple: {
          50: '#f8f9f7',
          100: '#ebeee7',
          200: '#d7dccf',
          300: '#bdc5af',
          400: '#a9b298',
          500: '#9BA17F',  // Olival Verde
          600: '#858b6a',
          700: '#6d7256',
          800: '#585d46',
          900: '#494d3a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'Nunito', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'title': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'subtitle': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      borderRadius: {
        'card': '28px',
        'button': '24px',
        'input': '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'softer': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(205, 231, 240, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 350ms ease-out',
        'slide-up-bounce': 'slideUpBounce 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'gentle-pulse': 'gentlePulse 2s ease-in-out infinite',
        'breathing-pulse': 'breathingPulse 2s ease-in-out infinite',
        'soft-bounce': 'softBounce 400ms ease-out',
        'float-slow': 'floatSlow 25s ease-in-out infinite',
        'float-slower': 'floatSlower 30s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease-in-out infinite',
        'ripple': 'ripple 600ms ease-out',
        'waveform': 'waveform 1.5s ease-out infinite',
        'icon-fill': 'iconFill 150ms ease-out',
        'modal-enter': 'modalEnter 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'tilt-gentle': 'tiltGentle 400ms ease-out',
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
        slideUpBounce: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '60%': { transform: 'translateY(-5px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.95' },
        },
        breathingPulse: {
          '0%, 100%': { transform: 'scale(0.98)' },
          '50%': { transform: 'scale(1.02)' },
        },
        softBounce: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -15px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 10px) scale(0.95)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 20px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '75%': { transform: 'translate(10px, 5px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        waveform: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2)', opacity: '0.3' },
        },
        iconFill: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        modalEnter: {
          '0%': { transform: 'translateY(100px) scale(0.8)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        tiltGentle: {
          '0%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(3deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(0deg)' },
        },
      },
      transitionDuration: {
        'gentle': '300ms',
      },
    },
  },
  plugins: [],
}
export default config

