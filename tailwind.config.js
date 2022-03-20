const plugin = require('tailwindcss/plugin')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'bkg': '#F0F2F5',
      'blue': '#5429CC',
      'red': '#E52E4D',
      'green': '#33CC95',
      
      'blue-light': '#6933FF',
      'light-green': withOpacityValue('--color-primary'),
      'light-red': withOpacityValue('--color-primary'),
      
      'shape': '#FFFFFF',
      'title': '#363F5F',
      'txt': '#969CB2',

    },
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities}) {
      // add default utilies for border-spacing
      addUtilities({
        '.border-spacing-2': {
          'border-spacing': '0 0.5rem',
        }
      })
    }),
  ],
}