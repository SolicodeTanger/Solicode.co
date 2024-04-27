/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      }
    },
    colors: {
      light: {
        default: "#fff",
        primary: "#F8F8FF",
        secondary: "#EFEFF6",
        bluePrimary: "#3A45B9",
        blueSecondary: "#8290D1",
        yellowPrimary: "#F2B705",
        yellowSecondary: "#C4971C",
        // 
        green: "#9DBF9E",
        red: "#FF6F61",
        beige: "#FCFCFC",
        grayPrimary: "#333333",
        graySecondary: "#9A9A9A",

      },
      dark: {
        default: "#181818",
        primary: "#2C3848",
        secondary: "",
        bluePrimary: "#22286E",
        blueSecondary: "#171C4C",
        yellowPrimary: "#C89704",
        yellowsecondary: "#846303",
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated')
  ]
}