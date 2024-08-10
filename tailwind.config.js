const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEF3E2',  // Blanco crema
        secondary: '#2E2E2E', // Gris mate
        tertiary: '#DE58D2' // Rosado
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary'),
          '--color-secondary': theme('colors.secondary'),
          '--color-tertiary': theme('colors.tertiary'),
        },
      });
    }),
  ],
}
