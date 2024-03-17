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
        'img-logo': 'url("/img/logo.webp")',
        'img-hands': 'url("/img/backgrounds/hands-mirror.webp")',
        'img-hands-loop': 'url("/img/backgrounds/hands-loop.jpg")',
        'img-violence': 'url("/img/backgrounds/violence.jpg")',
        'img-books': 'url("/img/backgrounds/books.webp")',
        'img-talk': 'url("/img/backgrounds/talk.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'two-color-secondary-right': 'linear-gradient(to right, #ffffff 0%, #ffffff 52%, #fee5e9 52%, #ffffff 100%)',
        'two-color-secondary-left': 'linear-gradient(to right, #ffffff 0%, #fee5e9 48%, #ffffff  48%, #ffffff 100%)'
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
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', position: 'relative', top: '-8px', pointerEvents: 'none' },
          '100%': { opacity: '1', position: 'relative', top: '0', pointerEvents: 'auto' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', position: 'relative', left: '-16px', pointerevents: 'none' },
          '100%': { opacity: '1', position: 'relative', left: '0', pointerevents: 'auto' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', position: 'relative', left: '16px', pointerevents: 'none' },
          '100%': { opacity: '1', position: 'relative', left: '0', pointerevents: 'auto' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', position: 'relative', top: '8px', pointerevents: 'none' },
          '100%': { opacity: '1', position: 'relative', top: '0', pointerevents: 'auto' }
        },
        'opacity-in-75': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
      }
    },
  },
  plugins: [],
}
export default config
