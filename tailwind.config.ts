import type {Config} from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: process.env.NEXT_PUBLIC_THEMES?.split(',') || [],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ':root',
  },
} satisfies Config;
