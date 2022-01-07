import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const useCurrentY = () => {
  const [currentPositionY, setCurrentPositionY] = useState(0);

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (isMounted) {
        setCurrentPositionY(window.scrollY);
      }
    };

    window.addEventListener('scroll', debounce(handleScroll, 50));
    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', debounce(handleScroll, 50));
    };
  }, []);
  return currentPositionY;
};

export default useCurrentY;
