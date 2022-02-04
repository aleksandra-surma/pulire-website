import Head from 'next/head';

const HeadMeta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="title" content="pulire | kompleksowe sprzątanie obiektów" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Red+Hat+Display:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_VERCEL_ID}`} />
      <meta
        name="keywords"
        content="pulire, sprzątanie lublin, sprzątanie hoteli Lublin, sprzątanie obiektów komercyjnych Lublin, firma sprzątająca Lublin, sprzątanie obiektów handlowo-usługowych, sprzątanie biur, sprzątanie poremontowe lublin"
      />
      <meta property="og:locale" content="pl_PL" />
      {/* <meta property="fb:app_id" content="ХХХХХХХХХХХХХХХ" /> todo: add app_id - https://developers.facebook.com/docs/sharing/webmasters#markup  */}
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_VERCEL_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <meta name="robots" content="noindex" />
      <title>Pulire - kompleksowe sprzątanie obiektów</title>
      {/* <meta name="robots" content="all" /> */}
      {/* <meta name="robots" content="all" />//todo: robots */}
    </Head>
  );
};

export default HeadMeta;
