import BaseLayout from 'components/BaseLayout';
import pages from 'data/paths';
import Image from 'next/image';
import Title from 'components/Title';
import napkinsImg from 'public/images/napkins-pulire.jpeg';

const FourZeroFour = () => {
  return (
    <BaseLayout currentPageUrl={pages.home}>
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-justify w-full min-h-pageView tall:min-h-[70vh] tallMobile:min-h-[calc(100vh-100px)] font-redHat">
        <div className="flex pt-6 flex-col w-full h-full justify-center items-center lg:w-2/5 text-base xs:text-lg tablet:text-xl">
          <Title title="404" />
          <p>Strona przez Ciebie wybrana nie istnieje.</p>
          <p>Proszę wybierz inny adres.</p>
        </div>
        <div className="p-2 py-8 lg:p-8 lg:w-1/2 lg:py-16">
          <Image src={napkinsImg} alt="Serwetki z logiem pulire" />
        </div>
      </section>
    </BaseLayout>
  );
};

export default FourZeroFour;
