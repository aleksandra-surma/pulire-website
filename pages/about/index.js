import BaseLayout from 'components/BaseLayout';
import aboutData from 'data/about';
import Title from 'components/Title';
import { navButtonsData } from 'data/buttons';
import AboutText from 'components/AboutText';
import Image from 'next/image';
import HeadSection from 'components/HeadSection';
import head from 'data/head';

const napkinsImg = '/images/napkins-pulire.jpeg';

const About = () => {
  const aboutPath = navButtonsData.about.path;

  return (
    <>
      <HeadSection
        title={head.about.title}
        description={head.about.description}
        ogData={aboutData.ogData}
        url={head.about.url}
      />
      <BaseLayout currentPageUrl={aboutPath}>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-left lg:text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] font-redHat">
          <div className="about__textContentWrapper lg:w-2/5">
            <Title title={aboutData.title} />
            <AboutText />
          </div>
          <div className="p-2 py-8 lg:p-8 lg:w-1/2 lg:py-16">
            <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px]">
              <Image priority src={napkinsImg} alt="Serwetki z logiem pulire" layout="fill" objectFit="contain" />
            </div>
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default About;
