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
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      }
    },
  },
  plugins: [],
}
