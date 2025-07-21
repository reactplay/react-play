module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 👈 enable dark mode manually via a class
  theme: {
    screens: {
      xs: { min: '310px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      '2xl': { min: '1536px' }
    },
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')]
};
