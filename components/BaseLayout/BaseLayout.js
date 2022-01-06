import Header from 'components/Header/Header';
import ViewWrapper from 'components/ViewWrapper/ViewWrapper';
import Footer from 'components/Footer/Footer';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import { PageContext } from 'data/pageContext';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import useMobileNav from 'hooks/useMobileNav';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import PuffLoader from 'react-spinners/PuffLoader';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const { isHamburger, isMobileMenuActive, isDesktop, toggleMenuActive } = useMobileNav();
  const [isLoading, setIsLoading] = useState(false);
  const providedData = { currentPage: currentPageUrl };

  useEffect(() => {
    const startLoaded = () => setIsLoading(true);
    const completeLoaded = () => setIsLoading(false);

    Router.events.on('routeChangeStart', startLoaded);
    Router.events.on('routeChangeComplete', completeLoaded);

    return () => {
      Router.events.off('routeChangeStart', startLoaded);
      Router.events.off('routeChangeComplete', completeLoaded);
    };
  }, [isLoading]);

  return (
    <PageContext.Provider value={providedData}>
      <PageWrapper className isMobileMenuActive={isMobileMenuActive}>
        <div className="">
          <Header
            isMobileMenuActive={isMobileMenuActive}
            toggleMenuActive={toggleMenuActive}
            isHamburger={isHamburger}
          />
          {isLoading && !isDesktop ? (
            <div className="flex fix top-0 left-0 overflow-hidden justify-center items-center w-screen h-screen bg-white">
              <PuffLoader size={120} />
            </div>
          ) : (
            <ViewWrapper>{children}</ViewWrapper>
          )}
          {isHamburger && isMobileMenuActive ? (
            <MobileNavigation setIsLoading={setIsLoading} toggleMenuActive={toggleMenuActive} />
          ) : null}
        </div>
        {isHamburger && isMobileMenuActive ? null : <Footer />}
      </PageWrapper>
    </PageContext.Provider>
  );
}
