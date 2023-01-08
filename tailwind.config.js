const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#496d45',
                dark: '#55402f',
                light: '#c4ad5e',
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
