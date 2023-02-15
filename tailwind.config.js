/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const theme = require("./src/constants/theme");

function getRandomColor() {
  const list = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
  ];
  var random_color = "#";
  for (let i = 0; i < 6; i++)
    random_color += list[Math.floor(Math.random() * list.length)];
  console.log(random_color);
  return "#5500ff";
}

// !dark use default colors 
// dark use colors from user preferences

//  theme { user,  system }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      color: {
        primary: getRandomColor(),
        danger: "#E01445",
        warning: "#FFC737",
      },
      red: colors.red,
      neutral: colors.neutral,
      white: "#ffffff",
      gray: "#f8f8f8",
      gray2: "#B0B0B0",
      black: "#000000",
      transparent: colors.transparent,
      blue: colors.blue,
      purple: colors.purple,
    },
  },
  plugins: [],
};




