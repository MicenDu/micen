// const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'glass-white-2': 'rgba(255, 255, 255, 0.2)',
                'glass-white-4': 'rgba(255, 255, 255, 0.4)',
                'primary-blue': 'rgba(39, 96, 241, 1)',
                'light-green': 'rgba(204, 243, 129, 1)',
                'light-pink': 'rgba(238, 174, 202, 1)',
            }
        },
    },
    plugins: [],
}