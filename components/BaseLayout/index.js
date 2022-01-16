import Header from 'components/Header';
import ViewWrapper from 'components/ViewWrapper';
import Footer from 'components/Footer';
import PageWrapper from 'components/PageWrapper';
import ScrollTop from 'components/ScrollTop';
import MobileNavigation from 'components/MobileNavigation';
import { PageContext } from 'data/pageContext';
import useMobileNav from 'hooks/useMobileNav';
import { useEffect, useMemo, useState } from 'react';
import { Router } from 'next/router';
import PuffLoader from 'react-spinners/PuffLoader';
import useCurrentY from 'hooks/useCurrentY';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const { isTablet, isMobileMenuActive, isDesktop, toggleMenuActive } = useMobileNav();
  const [isLoading, setIsLoading] = useState(false);
  const currentPositionY = useCurrentY();

  const providedData = useMemo(
    () => ({ currentPage: currentPageUrl, isMobileMenuActive, toggleMenuActive, isTablet }),
    [currentPageUrl, isMobileMenuActive, toggleMenuActive, isTablet],
  );

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
      <PageWrapper>
        <div className="">
          <Header />
          {isLoading && !isDesktop ? (
            <div className="flex fix top-0 left-0 overflow-hidden justify-center items-center w-screen h-screen bg-white">
              <PuffLoader size={120} />
            </div>
          ) : (
            <ViewWrapper>{children}</ViewWrapper>
          )}
          {!isTablet && isMobileMenuActive ? <MobileNavigation setIsLoading={setIsLoading} /> : null}
        </div>
        {isTablet && isMobileMenuActive ? null : <Footer />}
        {currentPositionY > 100 ? <ScrollTop /> : null}
      </PageWrapper>
    </PageContext.Provider>
  );
}
