/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  darkMode:"class",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        avarablack:["avarablack","regular"],
        avarabold:["avarabold","regular"],
        avarabold_italic:["avarabold_italic","regular"],
        calistoga:["calistoga","regular"],
        lobster:["lobster","regular"]
      },
      colors:{
        "mainbg":"#871400",
        "nightsky":"#001829"
      }
    }
  },
  plugins: []
};