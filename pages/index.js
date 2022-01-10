import BaseLayout from 'components/BaseLayout';
import pages from 'data/paths';
import HomeIntro from 'components/HomeIntro';
import HomeOffer from 'components/HomeOffer';
import CompanyAdvantages from 'components/CompanyAdvantages';

const Home = () => {
  return (
    <BaseLayout currentPageUrl={pages.home}>
      <HomeIntro />
      <HomeOffer />
      <CompanyAdvantages />
    </BaseLayout>
  );
};

export default Home;
