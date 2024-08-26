/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-pop-stroke': {
          'text-shadow': '3px  3px 0 #111827, -1px -1px 0 #111827, 1px -1px 0 #111827, -1px  1px 0 #111827, 1px  1px 0 #111827;',
          '-webkit-text-stroke': '1px #111827',
          '-webkit-text-fill-color': 'white',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}