import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import navButtonsData from 'data/buttons';
import { offersData } from 'data/offers';
import Offers from 'components/Offers/Offers';
import Title from 'components/Title/Title';
import FAQ from 'components/FAQ';

const OffersView = () => {
  const offerPath = navButtonsData.offer.path;

  return (
    <>
      <Head>
        <title>Pulire - oferta</title>
      </Head>
      <BaseLayout currentPageUrl={offerPath}>
        <section className="offers_offers flex flex-col lg:justify-center text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)]  font-redHat">
          <Title title={offersData.title} />
          <Offers />
        </section>
        <section className="offers_">
          <FAQ />
        </section>
      </BaseLayout>
    </>
  );
};

export default OffersView;
