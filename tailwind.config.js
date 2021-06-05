const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // To override any of the default colors
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink
    },
    // To extend the color palette (though this can also be done by adding additional colors above)
    extend: {
      colors: {
        primary: colors.rose
      }
    }
  }
}
