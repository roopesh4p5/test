/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFFFF',
        },
        accent: {
          brown: '#964B00',
          lightbrown: '#CBA580',
          cream: '#FFFBF7',
        },
        secondary: {
          blue: '#004B96',
          lightblue: '#80A5CB',
          lighterblue: '#E6EDF5',
        },
        neutral: {
          black: '#232323',
          gray: {
            600: '#6C6C6C',
            400: '#9A9A9A',
            300: '#BBBBBB',
            200: '#E2E2E2',
            100: '#F2F2F2',
          },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['34px', '41px'],
        'heading-2': ['22px', '28px'],
        'heading-3': ['17px', '22px'],
        'heading-4': ['15px', '20px'],
        'button-1': ['17px', '22px'],
        'button-2': ['12px', '16px'],
        'caption-1': ['12px', '16px'],
        'caption-2': ['11px', '13px'],
        'body-1': ['15px', '20px'],
        'body-2': ['13px', '18px'],
        'small-text': ['11px', '13px'],
      },
    },
  },
  plugins: [],
}
