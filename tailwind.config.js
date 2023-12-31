const colors = require('tailwindcss/colors');
// const plugin = require('tailwindcss/plugin');
// const defaultTheme = require('tailwindcss/defaultTheme');
const mainColors = require('./src/tailwind/main.colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: { ...colors, ...mainColors },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        basic: 'var(--color-basic)',
      },
    },
  },
  plugins: [],
};
