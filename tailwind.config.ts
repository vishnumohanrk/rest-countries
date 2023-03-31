import headlessUI from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig = {
  darkMode: 'class',

  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },

  plugins: [headlessUI],
} satisfies Config;

export default twConfig;
