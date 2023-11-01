/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      disable: '#494949',
      devider: '#B6B6B6',
      primary: {
        100: '#141414',
        200: '#565656',
      },
      error: {
        100: '#C72827',
        200: '#D55E5D',
      },
      typography: {
        100: '#141414',
        200: '#262626',
        300: '#565656',
        400: '#868686',
        500: '#B6B6B6',
        600: '#FFFFFF',
      },
    },
    extend: {
    },
  },
  plugins: [],
}

