import BaseLayout from 'components/BaseLayout';
import pages from 'data/paths';
import HomeIntro from 'components/HomeIntro';
import HomeOffer from 'components/HomeOffer';
import CompanyAdvantages from 'components/CompanyAdvantages';
import HeadSection from 'components/HeadSection';
import head from 'data/head';

const Home = () => {
  return (
    <>
      <HeadSection title={head.home.title} description={head.home.description} />
      <BaseLayout currentPageUrl={pages.home}>
        <HomeIntro />
        <HomeOffer />
        <CompanyAdvantages />
      </BaseLayout>
    </>
  );
};

export default Home;
