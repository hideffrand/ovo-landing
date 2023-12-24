import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#6e3ef5',
        // 'soft-purple': '#8f84b7',
        // 'dark-purple': '#34205f'
      }
    },
  },
  plugins: [],
}
export default config
