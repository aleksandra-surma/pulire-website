import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BaseLayout from 'components/BaseLayout/BaseLayout';

const About = () => {
  const router = useRouter();
  console.log('router: ', router);

  return (
    <>
      <Head>
        <title>Pulire - o nas</title>
      </Head>
      <BaseLayout>
        <div>about</div>
      </BaseLayout>
    </>
  );
};

export default About;
