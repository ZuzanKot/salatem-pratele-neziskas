const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#517248',
            },
            fontFamily: {
                sans: ['Rubik', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
