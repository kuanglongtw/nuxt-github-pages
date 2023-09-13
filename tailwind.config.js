/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#81D8D0",
        "secondary":"#0ABAB5",
        "tertiary":"#a2c4c9",
        "quaternary":"#76a5af",
        "dark":"#a7b1b3",
      },
      animation: {
        'waiting': 'wait 1s linear',
      },
      keyframes: {
        wait: {
          '0%': { opacity:'0' },
          '50%': { opacity:'0' },
          '100%': { opacity:'1' },
        }
      }
    },
  },
  plugins: [],
}

