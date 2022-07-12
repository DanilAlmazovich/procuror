const defaultTheme = require('tailwindcss/defaultTheme')
const {colors} = defaultTheme

module.exports = {
    mode: 'jit',
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sans: ["Rubik", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: {
                    ...colors.blue,
                    300: '#4678b1',
                    400: '#18569E',
                    500: '#245FA7'
                },
                boxShadow: {
                    md: '2px 4px 10px rgba(0, 0, 0, 0.1)',
                    blue: '0px 4px 24px rgba(106, 122, 152, 0.15)'
                }
            }
        },
    },
    plugins: [],
}