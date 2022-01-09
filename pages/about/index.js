import Head from 'next/head';
import BaseLayout from 'components/BaseLayout';
import navButtonsData from 'data/buttons';
import { v4 as uuid } from 'uuid';
import aboutData from 'data/about';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';
import Title from 'components/Title';

const About = () => {
  const aboutPath = navButtonsData.about.path;
  const rawAboutText = aboutData.description;
  const aboutText = rawAboutText.map((rawAboutLine) => addNonBreakableSpaces(rawAboutLine));

  return (
    <>
      <Head>
        <title>Pulire - o nas</title>
      </Head>
      <BaseLayout currentPageUrl={aboutPath}>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)]  font-redHat">
          <div className="lg:w-2/5">
            <Title title={aboutData.title} />
            <div>
              {aboutText.map((textParagraph) => {
                return (
                  <p className="py-3" key={uuid()}>
                    {textParagraph}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="bg-neutral-100 w-full min-h-[400px] lg:w-1/2 lg:ml-10 lg:py-10 lg:h-full text-neutral-100">
            .
          </div>
        </section>
      </BaseLayout>
    </>
  );
};

export default About;
