import Head from 'next/head';

const HeadSection = ({ title, description, index = true }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <title>{title}</title>
      {index ? <meta name="robots" content="noindex" /> : <meta name="robots" content="noindex" />}
      {/*  //todo: change in production to: <meta name="robots" content="all" /> */}
    </Head>
  );
};

export default HeadSection;
