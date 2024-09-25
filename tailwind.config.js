/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'font-color': '#dbe8d4',
      'name-color': '#81c7bc'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        custom1: ['custom1'], 
        custom2: ['custom2'], 
        custom3: ['custom3'], 
        custom4: ['custom4'], 
        custom5: ['custom5'], 
        custom6: ['custom6'], 
      }
    },
  },
  plugins: [],
}

