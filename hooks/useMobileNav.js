import { useEffect, useState } from 'react';
import { useMedia } from 'use-media';

const useMobileNav = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(null);
  const isTablet = useMedia({ minWidth: 768 });
  const isLaptop = useMedia({ minWidth: 1024 });

  const toggleMenuActive = () => setIsMobileMenuActive((prevState) => !prevState);

  let mediaQuery = null;
  if (typeof window !== 'undefined') {
    mediaQuery = window.matchMedia(`(min-width: 768px)`);
  }

  useEffect(() => {
    if (isLaptop) {
      setIsDesktop(true);
    } else if (!isLaptop) {
      setIsDesktop(false);
    }

    return () => {
      setIsDesktop(false);
      setIsMobileMenuActive(false);
      mediaQuery.removeEventListener('change', () => {});
    };
  }, [isTablet, isLaptop]);

  return { isDesktop, isMobileMenuActive, toggleMenuActive, isTablet, isLaptop };
};

export default useMobileNav;
