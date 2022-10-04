/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xsm': '375px',
      },
      backgroundImage: theme => ({
        'wavePattern': 'url("assets/images/wave-white.png")',
        'wavePatternDots': 'url("assets/images/pattern-white-dots.png")',
        'patternCharactersRed': 'url("assets/images/pattern-characters-red.png")',
        'characterMario': 'url("assets/images/character-l.png")',
        'wavePink': 'url("assets/images/wave-pink.png")',
        'yellowDots': 'url("assets/images/pattern-yellow-dots.png")',
      })

    },
  },
  plugins: [],
}
