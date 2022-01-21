import Head from 'next/head';

const HeadSection = ({ title, description, ogData, index = true }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      {index ? <meta name="robots" content="noindex" /> : <meta name="robots" content="noindex" />}
      {/*  //todo: change in production to: <meta name="robots" content="all" /> */}
    </Head>
  );
};

export default HeadSection;
