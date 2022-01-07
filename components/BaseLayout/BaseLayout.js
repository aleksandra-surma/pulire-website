import Header from 'components/Header/Header';
import ViewWrapper from 'components/ViewWrapper/ViewWrapper';
import Footer from 'components/Footer/Footer';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import ScrollTop from 'components/ScrollTop/ScrollTop';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import { PageContext } from 'data/pageContext';
import useMobileNav from 'hooks/useMobileNav';
import { useEffect, useMemo, useState } from 'react';
import { Router } from 'next/router';
import PuffLoader from 'react-spinners/PuffLoader';
import useCurrentY from 'hooks/useCurrentY';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const { isHamburger, isMobileMenuActive, isDesktop, toggleMenuActive } = useMobileNav();
  const [isLoading, setIsLoading] = useState(false);
  const currentPositionY = useCurrentY();

  const providedData = useMemo(
    () => ({ currentPage: currentPageUrl, isMobileMenuActive, toggleMenuActive, isHamburger }),
    [currentPageUrl, isMobileMenuActive, toggleMenuActive, isHamburger],
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
          {isHamburger && isMobileMenuActive ? <MobileNavigation setIsLoading={setIsLoading} /> : null}
        </div>
        {isHamburger && isMobileMenuActive ? null : <Footer />}
        {currentPositionY > 100 ? <ScrollTop /> : null}
      </PageWrapper>
    </PageContext.Provider>
  );
}

// return (
//   <div style={{ height: 4000 }}> {/* just added to make scrollbar available */}
//     <div style={{ position: "fixed", top: 0 }}>
//       {scrollY > 100
//         ? "Scrolled more than 100px"
//         : "Still somewhere near the top!"}
//     </div>
//   </div>
// );
