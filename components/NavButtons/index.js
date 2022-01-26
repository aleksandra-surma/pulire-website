import { useContext } from 'react';
import { Link } from 'routes';
import { navButtonsData } from 'data/buttons';
import { PageContext } from 'data/pageContext';

const NavButtons = ({ isMobile = true }) => {
  const { currentPage, toggleMenuActive } = useContext(PageContext);

  const navButtonsInfo = Object.values(navButtonsData);

  const nonMobileNavButtonClasses = (path) => {
    const { currentPage: pathnameUrl } = useContext(PageContext);

    return `${pathnameUrl === path ? 'text-neutral-800 font-semibold' : 'text-neutral-500'} ${
      path === '/kontakt' ? '' : 'pr-4 xxs:pr-6 tablet:pr-8'
    }`;
  };

  const mobileNavButtonClasses = (path) =>
    `${
      path === currentPage ? 'underline underline-offset-8' : null
    } text-xl xs:text-2xl font-bold font-redHat tracking-xl tracking-wider pt-5 pb-5`;

  return (
    <>
      {navButtonsInfo.map(({ label, path }) => {
        return (
          <div
            key={label}
            onClick={toggleMenuActive}
            className={isMobile ? mobileNavButtonClasses(path) : nonMobileNavButtonClasses(path)}>
            <Link route={path}>{label}</Link>
          </div>
        );
      })}
    </>
  );
};

export default NavButtons;
