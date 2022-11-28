/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        avarablack:["avarablack","black"],
        avarabold:["avarabold","bold"],
        avarabold_italic:["avarabold_italic","bolditalic"]
      }
    }
  },
  plugins: []
};