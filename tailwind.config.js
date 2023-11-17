/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '480px',
      md: '568px',
      xm: '748px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

