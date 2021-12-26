const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ["'Barlow', sans-serif", ...defaultTheme.fontFamily.sans],
        redHat: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        logo: '0.5rem',
      },
      colors: {
        black: '#111',
      },
      lineHeight: {
        full: '100%',
      },
      screens: {
        // https://tailwindcss.com/docs/screens
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// @layer base {
//   body {
//     font-family: 'Red Hat Display', sans-serif;
//     font-weight: 400;
//   }
//   nav {
//     font-family: 'Barlow', sans-serif;
//   }
// }
