/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'trans-rgba': 'rgba(255, 255, 255, .1)',
      },      
      screens: {
        'media440': '440px',
        'media560': '560px',
        'media1200': '1200px'
      },
      backgroundImage: {
        'testimonial-section': "url('https://i.postimg.cc/9Xk1nXZ6/miguel-a-amutio-QDv-u-Bc-po-Y-unsplash-1.png')",
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    }),
    plugin(function({ addVariant }) {
      addVariant("active", ".active &");
    })
  ],
}

