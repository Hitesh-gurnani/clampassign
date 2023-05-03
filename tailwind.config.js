/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes:{
        'trans-top':{
          '0%,100%':{transform:'translateY(10px)'},
          '50%':{transform:'translateY(0)'}
        },
        animation:{
          'trans-top':'trans-right 1.5s ease-in-out infinite'
        }
      }
    },
  },
  plugins: [],
}

