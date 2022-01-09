import { useEffect, useState } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import debounce from 'lodash.debounce';
import { useMedia } from 'use-media';

const useMobileNav = () => {
  const [isHamburger, setIsHamburger] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const isTablet = useMedia({ minWidth: 768 });
  const isLaptop = useMedia({ minWidth: 1024 });

  const toggleMenuActive = () => {
    setIsMobileMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (isTablet) {
      setIsHamburger(false);
    } else if (!isTablet) {
      setIsHamburger(true);
    }

    if (isLaptop) {
      setIsDesktop(true);
    } else if (!isLaptop) {
      setIsDesktop(false);
    }

    return () => {
      setIsHamburger(true);
      setIsDesktop(false);
    };
  }, [isTablet, isLaptop]);

  let mediaQuery = null;
  if (typeof window !== 'undefined') {
    mediaQuery = window.matchMedia(`(min-width: 768px)`);
  }

  useEffect(() => {
    mediaQuery.addEventListener('change', () => {
      setIsHamburger((prevState) => !prevState);
    });

    return () => {
      setIsHamburger(true);
      setIsDesktop(false);
      setIsMobileMenuActive(false);
      mediaQuery.removeEventListener('change', () => {});
    };
  }, [isTablet, isLaptop]);

  return { isHamburger, isDesktop, isMobileMenuActive, toggleMenuActive };
};

export default useMobileNav;
