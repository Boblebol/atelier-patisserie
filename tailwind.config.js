/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EDE4D8',
          300: '#DFD1BF',
          400: '#CDB79E',
          500: '#B89B7D',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F4EB',
          200: '#F0E3CA',
          300: '#E4CDA2',
          400: '#D4B072',
          500: '#C59A4E',
          600: '#A97E36',
          700: '#866028',
        },
        chocolate: {
          500: '#5C3826',
          600: '#4A2A1A',
          700: '#3D2012',
          800: '#2F160A',
          900: '#1F0C05',
          950: '#140602',
        },
        berry: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F8CFD8',
          300: '#F2AAB9',
          400: '#E7748F',
          500: '#D64368',
          600: '#B8284E',
          700: '#941B3B',
          800: '#6C1229',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(74, 42, 26, 0.08)',
        'card': '0 15px 35px -10px rgba(74, 42, 26, 0.12)',
        'glow': '0 0 25px rgba(212, 176, 114, 0.35)',
      }
    },
  },
  plugins: [],
}
