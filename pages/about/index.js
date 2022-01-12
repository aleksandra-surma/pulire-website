import Head from 'next/head';
import BaseLayout from 'components/BaseLayout';
import aboutData from 'data/about';
import Title from 'components/Title';
import { navButtonsData } from 'data/buttons';
import AboutText from 'components/AboutText';
import Image from 'next/image';
import napkinsImg from 'public/images/napkins-pulire.jpeg';

const About = () => {
  const aboutPath = navButtonsData.about.path;

  return (
    <>
      <Head>
        <title>Pulire - o nas</title>
      </Head>
      <BaseLayout currentPageUrl={aboutPath}>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] font-redHat">
          <div className="about__textContentWrapper lg:w-2/5">
            <Title title={aboutData.title} />
            <AboutText />
          </div>
          <div className="p-2 py-8 lg:p-8 lg:w-1/2 lg:py-16">
            <Image src={napkinsImg} alt="Serwetki z logiem pulire" />
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default About;
