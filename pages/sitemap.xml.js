import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: 'localhost:3000',
    production: 'www.pulire.co',
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return !['_app.js', 'api', '_document.js', 'index.js', '_error.js', '404.js', 'sitemap.xml.js'].includes(
        staticPage,
      );
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
