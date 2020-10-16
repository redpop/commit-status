const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Cairo', ...defaultTheme.fontFamily.sans],
            },
        },
    },
};