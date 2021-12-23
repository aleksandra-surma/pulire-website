const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'oferta', page: '/offer' })
  .add({ name: 'kontakt', page: '/contact' })
  .add({ name: 'o-nas', page: '/about' });
