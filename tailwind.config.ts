import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080808',
          secondary: '#111111',
          elevated: '#1A1A1A',
          contrast: '#F5F5F0',
        },
        text: {
          primary: '#FAFAFA',
          inverse: '#080808',
          secondary: '#999999',
          muted: '#555555',
        },
        accent: {
          DEFAULT: '#CDFF50',
          hover: '#B8E843',
        },
        line: '#1E1E1E',
        'line-hover': '#333333',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1440px' },
      letterSpacing: { tightest: '-0.04em', 'ultra-tight': '-0.06em' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 40s linear infinite' },
    },
  },
  plugins: [],
};
export default config;
