/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple':
          'linear-gradient(90deg, rgba(250,202,251,1) 0%, rgba(177,125,236,1) 30%, rgba(194,59,214,1) 66%, rgba(250,151,119,1) 100%);',
      },
      fontFamily: {
        mirtha: ['var(--font-mirtha)'],
        inter: ['var(--font-inter)'],
        satoshi: ['var(--font-satoshi)'],
      },
      colors: {},
    },
  },
  plugins: [],
};
