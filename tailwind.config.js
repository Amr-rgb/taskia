module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      darkGrey: 'rgb(30, 28, 36, .85)',
      grey: '#B1AAAA',
      lightGrey: '#EBEBEB',
      blue: '#525FFB',
      cyan: '#E9F0FF',
      yellow: '#FFE7AA',
    },
    fontSize: {
      xs: ['.875rem', '23px'],
      sm: ['1rem', '26px'],
      base: ['1.125rem', '30px'],
      lg: ['1.25rem'],
      xl: ['1.375rem', '29px'],
      '2xl': ['1.875rem', '40px'],
      '3xl': ['2rem', '44px'],
      '4xl': ['2.375rem', '46px'],
      '5xl': ['3.125rem', '60px'],
      '6xl': ['3.3125rem', '73px'],
      '7xl': ['4.375rem', '97px'],
    },
    extend: {},
  },
  plugins: [],
}
