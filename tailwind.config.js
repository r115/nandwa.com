module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "base": "#262325"
      },
      fontFamily: {
        sans: ['Roboto','Helvetica', 'Arial', 'sans-serif'],
        branding: ['"Josefin Sans"','Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
