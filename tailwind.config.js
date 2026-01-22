/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1370b5',
        secondary: '#152858',
        text: '#363636',
        'text-light': '#666666',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Titillium Web"', 'sans-serif'],
      },
      maxWidth: {
        1200: '1200px',
      },
    },
  },
  plugins: [],
};
