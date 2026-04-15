import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple-exact palette.
        bg: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F7',       // Apple off-white
          elevated: '#FFFFFF',
          contrast: '#0A0A0A',        // near-black for contrast sections
          dark: '#0A0A0A',
        },
        text: {
          primary: '#1D1D1F',         // Apple text
          inverse: '#F5F5F7',
          secondary: '#6E6E73',       // Apple secondary
          muted: '#86868B',            // Apple caption
        },
        accent: {
          DEFAULT: '#1D1D1F',         // restrained — no pink shouting
          soft: '#F5F5F7',
          deep: '#000000',
          hover: '#424245',
          cream: '#F5F5F7',
        },
        line: '#D2D2D7',              // Apple border
        'line-hover': '#86868B',
        'line-dark': '#1D1D1F',
      },
      fontFamily: {
        display: ['var(--font-display)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { site: '1440px' },
      letterSpacing: { tightest: '-0.04em', 'ultra-tight': '-0.055em' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.04)',
        elevated: '0 2px 8px rgba(0, 0, 0, 0.04), 0 24px 48px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
