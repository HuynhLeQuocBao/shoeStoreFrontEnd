/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        xl: ['3px 3px 0px #F6F6F6', '3px 3px 0px #99CCCC'],
      },
      colors: {
        primary: '#88c8bc',
        secondary: '#BE8184',
        third: '#C97E83',
        blue: '#1877f2',
        black: '#000000',
      },
      fontFamily: {
        iCielSamsungSharpSans: 'iCiel Samsung Sharp Sans',
        SamsungOne600C: "'SamsungOne 600C'",
        SamsungInterFace: 'Samsung InterFace',
      },
      backgroundImage: {
        'border-small': "url('/images/subject/border-small.png')",
        'border-big': "url('/images/subject/border-big.png')",
      },
      backgroundSize: {
        '100%': '100%',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
  important: true,
};
