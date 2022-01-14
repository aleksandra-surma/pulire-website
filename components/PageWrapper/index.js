import useMobileNav from 'hooks/useMobileNav';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const PageWrapper = ({ children }) => {
  const { isMobileMenuActive } = useMobileNav();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={`text-neutral-900 ${isMobileMenuActive ? 'overflow-hidden max-h-screen' : null}`}>{children}</div>
  );
};

export default PageWrapper;
