import { useEffect, useState } from 'react';

const useOnScreen = (ref, rootMargin) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  return isIntersecting;
};

export default useOnScreen;
