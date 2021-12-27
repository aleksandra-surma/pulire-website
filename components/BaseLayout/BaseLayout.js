import Header from 'components/Header/Header';
import ViewWrapper from 'components/ContentWrapper/ContentWrapper';
import Footer from 'components/Footer/Footer';
import PageWrapper from 'components/PageWrapper/PageWrapper';
import { PageContext } from 'data/pageContext';
import { useEffect, useState } from 'react';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import useWindowSize from '../../hooks/useWindowSize';

export default function BaseLayout({ children, currentPageUrl = '/' }) {
  const providedData = { currentPage: currentPageUrl };

  const [isShortNav, setIsShortNav] = useState(true);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenuActive = () => setIsMobileMenuActive((prevState) => !prevState);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setIsShortNav(false);
    } else if (width <= 768) {
      setIsShortNav(true);
    }
  }, [width]);

  let mediaQuery = null;
  if (typeof window !== 'undefined') {
    mediaQuery = window.matchMedia(`(min-width: 768px)`);
  }

  useEffect(() => {
    mediaQuery.addEventListener('change', () => {
      console.log('change query 768px');
      setIsShortNav((prevState) => !prevState);
    });

    return () => {
      mediaQuery.removeEventListener('change', () => {});
    };
  }, [width]);

  return (
    <PageContext.Provider value={providedData}>
      <PageWrapper>
        <div className="min-h-screen">
          <Header isMobileMenuActive={isMobileMenuActive} toggleMenuActive={toggleMenuActive} isShortNav={isShortNav} />
          <ViewWrapper>{children}</ViewWrapper>

          {isShortNav && isMobileMenuActive ? (
            <MobileNavigation
              isMobileMenuActive={isMobileMenuActive}
              toggleMenuActive={toggleMenuActive}
              isShortNav={isShortNav}
            />
          ) : null}
        </div>
        {isShortNav && isMobileMenuActive ? null : <Footer />}
      </PageWrapper>
    </PageContext.Provider>
  );
}
