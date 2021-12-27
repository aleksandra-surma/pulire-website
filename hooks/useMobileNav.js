import { useEffect, useState } from 'react';
import useWindowSize from './useWindowSize';

const useMobileNav = () => {
  const [isHamburger, setIsHamburger] = useState(true);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMenuActive = () => setIsMobileMenuActive((prevState) => !prevState);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setIsHamburger(false);
    } else if (width <= 768) {
      setIsHamburger(true);
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

  return { isHamburger, isMobileMenuActive, toggleMenuActive };
};

export default useMobileNav;
