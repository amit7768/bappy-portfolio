import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F9F9F7',
          dim: '#F0EFEB',
          card: '#FFFFFF',
          dark: '#0F0F0D',
          'dim-dark': '#1A1A17',
          'card-dark': '#181816',
        },
        ink: {
          DEFAULT: '#0D0D0B',
          soft: '#58584F',
          faint: '#9A9A90',
          dark: '#EDECE8',
          'soft-dark': '#B8B8B0',
          'faint-dark': '#7A7A72',
        },
        rule: {
          DEFAULT: '#E0DFDA',
          dark: '#2C2C28',
        },
        accent: {
          red: '#B91C1C',
          gold: '#D4A853',
        },
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'Menlo', 'monospace'],
      },
      maxWidth: {
        site: '1360px',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
