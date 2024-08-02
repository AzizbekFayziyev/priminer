/** @type {import('tailwindcss').Config} */
export default {
   content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            '2xl': '120px'
         }
      },
      extend: {
         colors: {
            background: 'var(--background)',
            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
            grey: 'var(--grey)',
            black: 'var(--black)',
            border: 'var(--border)',
            input: 'var(--input)'
         },
         borderRadius: {
            DEFAULT: 'var(--radius)',
            xl: 'calc(var(--radius) + 4px)',
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
         }
      }
   },
   plugins: []
};
