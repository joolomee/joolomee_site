import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAF5F2',        // warm cream — Apple-light base
          secondary: '#F3ECE8',      // soft warm alabaster
          elevated: '#FFFFFF',       // pure white cards
          contrast: '#17121A',       // deep warm black for contrast sections
          dark: '#17121A',
        },
        text: {
          primary: '#17121A',        // deep warm black
          inverse: '#FAF5F2',        // cream on dark
          secondary: '#5B5058',      // warm grey
          muted: '#8F828A',          // softer
        },
        accent: {
          DEFAULT: '#FF4D8F',        // vibrant brand pink
          soft: '#FFD6E3',           // yarn pink
          deep: '#C73666',           // darker hover
          hover: '#FF7AA9',
          cream: '#FFE8EF',
        },
        line: '#E7DDD8',
        'line-hover': '#D4C6BF',
        'line-dark': '#2A222A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1440px' },
      letterSpacing: { tightest: '-0.04em', 'ultra-tight': '-0.06em' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-18px) rotate(8deg)' } },
        glow: { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        drawline: { '0%': { strokeDashoffset: '1' }, '100%': { strokeDashoffset: '0' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
        float: 'float 7s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
      backgroundImage: {
        'grad-pink': 'linear-gradient(135deg, #FF4D8F 0%, #FFB3C7 50%, #FF7AA9 100%)',
        'grad-aurora': 'radial-gradient(ellipse at top left, rgba(255, 77, 143, 0.18), transparent 55%), radial-gradient(ellipse at bottom right, rgba(255, 214, 227, 0.35), transparent 60%)',
        'grad-soft': 'linear-gradient(180deg, #FFE8EF 0%, transparent 100%)',
        'grad-cream': 'linear-gradient(180deg, #FAF5F2 0%, #F3ECE8 100%)',
        'grad-dusk': 'linear-gradient(135deg, #17121A 0%, #2A1F28 50%, #FF4D8F 160%)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23, 18, 26, 0.04), 0 8px 24px rgba(23, 18, 26, 0.06)',
        elevated: '0 2px 4px rgba(23, 18, 26, 0.04), 0 24px 48px rgba(23, 18, 26, 0.08)',
        pink: '0 8px 32px rgba(255, 77, 143, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
