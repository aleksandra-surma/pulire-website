import Header from 'components/Header/Header';
import ViewWrapper from 'components/ContentWrapper/ContentWrapper';
import Footer from 'components/Footer/Footer';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import { PageContext } from 'data/pageContext';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const providedData = { currentPage: currentPageUrl };

  return (
    <PageContext.Provider value={providedData}>
      <PageWrapper>
        <div className="min-h-screen">
          <Header />
          <ViewWrapper>{children}</ViewWrapper>
        </div>
        <Footer />
      </PageWrapper>
    </PageContext.Provider>
  );
}
