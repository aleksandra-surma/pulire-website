import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import navButtonsData from 'data/buttons';
import { v4 as uuid } from 'uuid';
import aboutData from 'data/about';
import addNonBreakableSpaces from 'utils/addNonBreakableSpaces';

// const aboutData = {
//   title: 'O nas',
//   description: [
//     'Pomysł na PULIRE zrodził się z zamiłowania do estetyzmu. Cenimy porządek i harmonię. W działalności nieustannie staramy się połączyć ze sobą te dwa wrażenia estetyczne. Bez nich nie powstałoby PULIRE.',
//     'PULIRE to nie tylko pomysł na nową odsłonę usług sprzątania, to kompozycja tradycji i nowoczesności. To miejsce gdzie usługa jest synonimem klasycznej prostoty, ale także połączeniem nowego i świeżego spojrzenia na ten segment rynku.',
//     'PULIRE kompleksowo obsługuje sprzątanie obiektów: przemysłowych, handlowo-usługowych, biur, lokali użytkowych, obiektów mieszkaniowych i innych powierzchni komercyjnych. Specjalizujemy się również w sprzątaniu poremontowym i pobudowlanym. Zapraszamy do zapoznania się z naszą ofertą i skorzystania z usług.',
//   ],
// };

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
        <section className="flex flex-col lg:justify-center text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] lg:w-2/5 font-redHat">
          <h2 className="pb-8 text-5xl font-bold font-redHat tracking-logo">{aboutData.title}</h2>
          <div>
            {aboutText.map((textParagraph) => {
              return (
                <p className="py-3" key={uuid()}>
                  {textParagraph}
                </p>
              );
            })}
          </div>
        </section>
        <div className="bg-neutral-100 w-full min-h-[400px] lg:w-1/2 lg:m-10 text-neutral-100">.</div>
      </BaseLayout>
    </>
  );
};

export default About;
