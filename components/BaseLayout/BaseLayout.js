import Header from 'components/Header/Header';
import ViewWrapper from 'components/ContentWrapper/ContentWrapper';
import Footer from 'components/Footer/Footer';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import { PageContext } from 'data/pageContext';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import useMobileNav from 'hooks/useMobileNav';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const providedData = { currentPage: currentPageUrl };
  const { isHamburger, isMobileMenuActive, toggleMenuActive } = useMobileNav();

  return (
    <PageContext.Provider value={providedData}>
      <PageWrapper>
        <div className="">
          <Header
            isMobileMenuActive={isMobileMenuActive}
            toggleMenuActive={toggleMenuActive}
            isHamburger={isHamburger}
          />
          <ViewWrapper>{children}</ViewWrapper>
          {isHamburger && isMobileMenuActive ? <MobileNavigation toggleMenuActive={toggleMenuActive} /> : null}
        </div>
        {isHamburger && isMobileMenuActive ? null : <Footer />}
      </PageWrapper>
    </PageContext.Provider>
  );
}
