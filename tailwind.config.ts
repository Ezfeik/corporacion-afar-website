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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          '50': '#ebf9ff',
          '100': '#d1f1ff',
          '200': '#aee8ff',
          '300': '#76dcff',
          '400': '#35c6ff',
          '500': '#07a3ff',
          '600': '#007dff',
          '700': '#0064ff',
          '800': '#0052d7',
          '900': '#004295',
          '950': '#062d65',
        },
      }
    },
  },
  plugins: [],
}
export default config
