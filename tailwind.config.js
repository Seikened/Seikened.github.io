// tailwind.config.js
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
  plugins: [],
}
