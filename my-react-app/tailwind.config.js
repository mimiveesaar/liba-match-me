/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto_serif: ['Noto Serif', 'serif'],
        ibm_plex_sans: ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        olive: '#DBDB72',
        amberglow: '#FDC167',
        peony: '#F6D8EC',
        minty: '#D2F0EA',
        moss: '#BCC5AA',
        coral: '#EF764E',
        limeburst: '#30F84E',
        ivory: '#FFFCF7',
      },
      borderRadius: {
        custom_4: "4px",
        custom_16: "16px", 
      },
      width: {
        77: "77px",
        100: "100px",
        265: "265px",
        
      },
      height: {
        17: "17px",
        196: "196px",
        360: "360px",
      },
    },
  },
  plugins: [],
}
