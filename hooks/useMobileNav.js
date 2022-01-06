import { useEffect, useState } from 'react';
import useWindowSize from 'hooks/useWindowSize';

const useMobileNav = () => {
  const [isHamburger, setIsHamburger] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setIsMobileMenuActive((prevState) => !prevState);
  };

  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 768) {
      setIsHamburger(false);
    } else if (width < 768) {
      setIsHamburger(true);
    }

    if (width >= 1024) {
      setIsDesktop(true);
    } else if (width < 1024) {
      setIsDesktop(false);
    }
  }, [width]);

  let mediaQuery = null;
  if (typeof window !== 'undefined') {
    mediaQuery = window.matchMedia(`(min-width: 768px)`);
  }

  useEffect(() => {
    mediaQuery.addEventListener('change', () => {
      setIsHamburger((prevState) => !prevState);
    });

    return () => {
      mediaQuery.removeEventListener('change', () => {});
    };
  }, [width]);

  return { isHamburger, isDesktop, isMobileMenuActive, toggleMenuActive };
};

export default useMobileNav;
