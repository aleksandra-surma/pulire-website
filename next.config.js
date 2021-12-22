module.exports = {
  async redirects() {
    return [
      {
        source: '/o-nas',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};
