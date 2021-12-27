import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import navButtonsData from 'data/buttons';

const About = () => {
  const aboutPath = navButtonsData.about.path;

  return (
    <>
      <Head>
        <title>Pulire - o nas</title>
      </Head>
      <BaseLayout currentPageUrl={aboutPath}>
        <div>about</div>
      </BaseLayout>
    </>
  );
};

export default About;
