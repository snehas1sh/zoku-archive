/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zoku: {
          black: '#08080a',
          dark: '#0e0e12',
          surface: '#121217',
          card: '#16161c',
          cardHover: '#1c1c24',
          border: '#26262e',
          borderSubtle: '#181820',
          red: '#b7282e',
          redHover: '#cd2e35',
          redMuted: '#66191c',
          white: '#f5f5f7',
          offwhite: '#e5e5ea',
          gray: '#8e8e93',
          muted: '#636366',
          lightBg: '#f6f6f8',
          lightCard: '#ffffff',
          lightBorder: '#e5e5ea',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        jp: ['"Noto Sans JP"', '"Hiragino Sans"', '"Meiryo"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      lineHeight: {
        tightest: '1.05',
      }
    },
  },
  plugins: [],
}
