import Head from 'next/head';

const HeadSection = ({ title, description, ogData, indexing = true }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      {indexing ? <meta name="robots" content="all" /> : <meta name="robots" content="none" />}
      {/* //todo: change in production to: {index ? <meta name="robots" content="all" /> : <meta name="robots" content="none" />} */}
    </Head>
  );
};

export default HeadSection;
