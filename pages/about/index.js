import Head from 'next/head';
// import { useRouter } from 'next/router';
import BaseLayout from 'components/BaseLayout/BaseLayout';

const About = () => {
  // const router = useRouter();
  // console.log('router.route: ', router.route);

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
