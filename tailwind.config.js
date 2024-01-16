/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'be-vietname-pro': ['Be Vietnam Pro', 'sans-serif']
      },
      colors: {
        'black-russian': '#18191B',
        'black-pearl': '#1B1D1F',
        bunker: '#282B30',
        'royal-blue': '#4E80EE',
        raven: '#6C727F',
        'link-water': '#D2D5DA'
      },
      content: {
        arrowDownIcon: 'url("src/assets/Expand_down.svg")'
      }
    }
  },
  plugins: []
}
