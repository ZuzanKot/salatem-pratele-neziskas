const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#496d45',
            },
            fontFamily: {
                sans: ['Unbounded', ...defaultTheme.fontFamily.sans],
            },
            dropShadow: {
                primary: '0 35px 35px rgba(215, 193, 120, 1)',
            },
        },
    },
    plugins: [],
}
