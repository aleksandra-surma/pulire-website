import BaseLayout from 'components/BaseLayout';
import { navButtonsData } from 'data/buttons';
import { faq, offersData } from 'data/offers';
import Offers from 'components/Offers/Offers';
import Title from 'components/Title';
import FAQ from 'components/FAQ';
import Image from 'next/image';
import useMobileNav from 'hooks/useMobileNav';
import HeadSection from 'components/HeadSection';
import head from 'data/head';

const OffersView = () => {
  const { isDesktop } = useMobileNav();

  const offerPath = navButtonsData.offer.path;

  return (
    <>
      <HeadSection title={head.offer.title} description={head.offer.description} ogData={offersData.ogData} />
      <BaseLayout currentPageUrl={offerPath}>
        <section className="offers_offers flex flex-col lg:justify-center text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] font-redHat">
          <Title title={offersData.title} />
          <Offers />
        </section>
        <section className="offers w-full flex flex-col lg:flex-row mt-10">
          <FAQ />
          {isDesktop ? (
            <div className="p-2 py-8 lg:p-8 lg:w-1/2 flex justify-center lg:py-16">
              <Image src={faq.faqUrl} alt="Serwetki z logiem pulire" />
            </div>
          ) : null}
        </section>
      </BaseLayout>
    </>
  );
};

export default OffersView;
