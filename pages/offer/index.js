import Head from 'next/head';
import BaseLayout from 'components/BaseLayout/BaseLayout';
import navButtonsData from '../../data/buttons';

const Offer = () => {
  const offerPath = navButtonsData.offer.path;

  return (
    <>
      <Head>
        <title>Pulire - oferta</title>
      </Head>
      <BaseLayout currentPageUrl={offerPath}>
        <div>Oferta</div>
      </BaseLayout>
    </>
  );
};

export default Offer;
