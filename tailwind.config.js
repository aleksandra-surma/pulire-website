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
      minHeight: {
        pageView: 'calc(100vh - 128px)',
      },
      maxHeight: {
        about: '600px',
      },
      fontSize: {
        base: '1rem',
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
        xxs: '360px',
        xs: '480px',
        tablet: '768px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',

        // => @media (min-width: 1280px) { ... }
        tall: { raw: '(min-height: 900px)' },
        tallMobile: { raw: '(orientation: portrait) and (max-width: 500px)' },
        tabletTall: { raw: '(orientation: portrait) and (min-width: 501px)' },
        tabletBigLandscape: { raw: '(orientation: landscape) and (min-height: 900px)' },
      },
      outline: {
        green: '2px solid #00cc00',
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
