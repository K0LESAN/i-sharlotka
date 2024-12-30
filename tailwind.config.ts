import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--montserrat)'],
        gilroy: ['var(--gilroy)'],
        akrobat: ['var(--akrobat)'],
        roboto: ['var(--roboto)'],
        raleway: ['var(--raleway)'],
        'open-sans': ['var(--open-sans)']
      },
      colors: {
        lightborder: 'var(--lightborder)',
        gray: 'var(--gray)',
        'gray-dark': 'var(--gray)',
        'blue-dark': 'var(--blue)',
        'blue-light': 'var(--blue)',
        'gray-text': 'var(--gray)',
        'gray-medium': 'var(--gray)',
        green: 'var(--green)',
        red: 'var(--red)',
        white: 'var(--white)'
      }
    }
  },
  plugins: []
} satisfies Config;
