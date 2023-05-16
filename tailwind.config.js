/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'primary':{
          50:'#fcfcfd',
          100:'#e6e0ed',
          200:'#ccc1dc',
          300:'#b3a3ca',
          400:'#9984b9',
          DEFAULT: '#8065A7', // Logo Color
          600:'#604c7d',
          700:'#403354',
          800:'#20192a'
        },        
        'secondary':colors.slate,
        'purple': {
          100:'#e6d9f8',
          200:'#ccb3f0',
          300:'#b38ee9',
          400:'#9968e1',
          DEFAULT:'#8042da',
          600:'#6032a3',
          700:'#40216d',
          800:'#201037',
        },
        'lime': {
          100:'#a3da42',
          200:'#daf0b3',
          300:'#c8e98e',
          400:'#a3da42',
          DEFAULT: '#a3da42',
          600:'#7aa332',
          700:'#526d21',
          800:'#293710'
        },
        'zinc':{
           50:'#fafafa',
          100:'#f4f4f5',
          200:'#e4e4e7',
          300:'#d4d4d8',
          400:'#a1a1aa',
          DEFAULT: '#71717a',
          600:'#52525b',
          700:'#3f3f46',
          800:'#27272a',
          825:"#232326",
          900:'#18181b',
          950:'#09090b'
        },
        'teal':{
          DEFAULT: '#61b4c1',
        },
        'red':{
          DEFAULT: '#ff5959'
        }
      },
    },
  },
  plugins: [],
}
