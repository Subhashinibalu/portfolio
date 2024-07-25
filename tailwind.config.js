const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: { backgroundImage: {
      'homebg': "url('./src/assets/yellowbg.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
  colors:{
   'customyellow':"#FEED02",
   'customyellow2':"#FBDA00",
   'customyellow3':"#F8C701"
   
  }},
    fontFamily: {
      'homefont': "Sriracha",
      'namefont':"Srisakdi",
    },
  },
  plugins: [flowbite.plugin()],
}