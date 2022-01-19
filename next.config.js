const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMod = true;

  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    SITE_KEY: process.env.SITE_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    IS_PROD: isProd,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    GA_MEASUREMENT_VERCEL_ID: process.env.GA_MEASUREMENT_VERCEL_ID,
  };

  const rewrites = () => {
    return [
      {
        source: '/o-nas',
        destination: '/about',
      },
      {
        source: '/oferta',
        destination: '/offer',
      },
      {
        source: '/kontakt',
        destination: '/contact',
      },
    ];
  };

  return {
    reactStrictMod,
    env,
    rewrites,
  };
};
