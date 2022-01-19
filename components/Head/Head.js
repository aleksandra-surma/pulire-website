import Head from 'next/head';

const HeadContainer = () => {
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
      <link rel="icon" href="/icons/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Red+Hat+Display:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <title>Pulire - kompleksowe sprzątanie obiektów</title>
      <meta name="robots" content="noindex" />
      {/* <meta name="robots" content="all" /> */}
      {/* todo: switch with noindex */}
      {/* <meta name="description" */}
      {/*      content="Zajrzyj i napisz do nas. Oferujemy usługi w zakresie fotowoltaiki, projektowania i wykonawstwa sieci elektroenergetycznych SN i nn, nadzoru inwestorskiego, prowadzenia inwestycji, doradztwa i kierowania robotami budowlanymi w branży elektroenergetycznej...">//todo: description */}
      {/* <meta name="keywords" */}
      {/*      content="elsystem, el system, el-system, elsystem lublin, sieci elektroenergetyczne, branża elektroenergetyczna lublin, projekty instalacji elektrycznych, fotowoltaika lublin">//todo: keywords */}
      {/* <meta name="robots" content="all" />//todo: robots */}
    </Head>
  );
};

export default HeadContainer;
