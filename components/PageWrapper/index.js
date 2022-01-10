import useMobileNav from 'hooks/useMobileNav';

const PageWrapper = ({ children }) => {
  const { isMobileMenuActive } = useMobileNav();

  return (
    <div className={`text-neutral-900 ${isMobileMenuActive ? 'overflow-hidden max-h-screen' : null}`}>{children}</div>
  );
};

export default PageWrapper;
