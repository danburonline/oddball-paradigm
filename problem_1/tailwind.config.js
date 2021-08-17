module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#2A8C7A', // From the IDUN website
      hover: '#216d5f' // Defined this on my own
    }),
    textColor: {
      primary: '#2A8C7A',
      hover: '#216d5f',
      white: '#fff',
      black: '#000'
    },
    screens: {
      sm: '640px',
      md: '850px',
      lg: '1024px',
      xl: '1280px'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in'
    },
    backgroundImage: () => ({
      'hero-image': "url('/img/brain.jpeg')"
    })
  }
}
