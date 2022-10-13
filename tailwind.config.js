/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            wiggle: {
                '0%, 100%': {
                    transform: 'rotate(-30deg)'
                },
                '50%': {
                    transform: 'rotate(30deg)'
                },
            },
        },
        animation: {
            wiggle: 'wiggle 0.7s ease-in-out infinite',
        }
    },
},
  plugins: [],
}