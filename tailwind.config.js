/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Display"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        email: '#C71610',
        github: '#6cc644',
        codepen: '#FCD000',
        linkedin: '#0077B5',
      },
    },
  },
  plugins: [],
}
