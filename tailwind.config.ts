import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-logo': 'url("/logo.webp")',
        'img-hands': 'url("/backgrounds/hands.jpg")',
        'img-hands-loop': 'url("/backgrounds/hands-loop.jpg")',
        'img-violence': 'url("/backgrounds/violence.jpg")',
        'img-books': 'url("/backgrounds/books.jpg")',
        'img-talk': 'url("/backgrounds/talk.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          '50': '#f0f8ff',
          '100': '#e0effe',
          '200': '#b9e0fe',
          '300': '#7bc8fe',
          '400': '#36adfa',
          '500': '#0b92ec',
          '600': '#0073ca',
          '700': '#015ea8',
          '800': '#054d87',
          '900': '#0b416f',
          '950': '#07294a',
        },
        'secondary': {
          '50': '#fff1f3',
          '100': '#fee5e9',
          '200': '#fdced8',
          '300': '#faa7b9',
          '400': '#f77594',
          '500': '#ef4471',
          '600': '#d8225b',
          '700': '#b9174d',
          '800': '#9b1647',
          '900': '#851642',
          '950': '#4a0720',
        },
        'tertiary': {
          '50': '#edfff3',
          '100': '#d6ffe6',
          '200': '#afffcd',
          '300': '#71ffa8',
          '400': '#2dfb7b',
          '500': '#02e55a',
          '600': '#00bf46',
          '700': '#00973b',
          '800': '#067532',
          '900': '#085f2b',
          '950': '#003616',
        },
      }
    },
  },
  plugins: [],
}
export default config
