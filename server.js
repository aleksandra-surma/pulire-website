// server.js
const next = require('next');
const express = require('express');
const path = require('path');
const routes = require('./routes');

// With express
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Serve static files from Next.js public directory explicitly (for custom server)
  server.use('/_next', express.static(path.join(__dirname, '.next')));
  server.use(express.static(path.join(__dirname, 'public')));

  server.use(handler);

  server.listen(PORT);
});
