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
        primary: { ...colors.violet, ...{ DEFAULT: colors.violet['500'] } },
        dark: { ...colors.coolGray, ...{ DEFAULT: colors.coolGray['900'] } },
        light: { ...colors.emerald, ...{ DEFAULT: colors.emerald['50'] } }
      },
      // To add fonts
      fontFamily: {
        poster: ['Ubuntu Mono']
      }
    }
  }
}
