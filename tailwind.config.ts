import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070709',
          900: '#0b0b0e',
          850: '#101014',
          800: '#15151a',
          700: '#202028',
          600: '#2b2b35'
        },
        crimson: {
          400: '#ff4d5e',
          500: '#ef2a3d',
          600: '#d5122a',
          700: '#ad0d21'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 45px rgba(239, 42, 61, 0.28)',
        card: '0 22px 50px rgba(0,0,0,0.55)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.2,1) both',
        'fade-in': 'fade-in .5s ease both',
        'slow-zoom': 'slow-zoom 18s ease-in-out infinite alternate',
        shimmer: 'shimmer 2s linear infinite',
        float: 'float 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
