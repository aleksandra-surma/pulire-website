import { useContext } from 'react';
import { Link } from 'routes';
import navButtonsData from 'data/buttons';
import { PageContext } from 'data/pageContext';

const NavButtons = ({ isMobile = true }) => {
  const navButtonsInfo = Object.values(navButtonsData);

  const nonMobileNavButtonClasses = (path) => {
    const { currentPage: pathnameUrl } = useContext(PageContext);

    return `${pathnameUrl === path ? 'text-gray-800 font-semibold' : 'text-gray-500'} ${
      path === '/kontakt' ? '' : 'pr-4 xxs:pr-6 tablet:pr-8'
    }`;
  };

  const mobileNavButtonClasses = '';

  return (
    <>
      {navButtonsInfo.map(({ label, path }) => {
        return (
          <div key={label} className={isMobile ? mobileNavButtonClasses : nonMobileNavButtonClasses(path)}>
            <Link route={path}>{label}</Link>
          </div>
        );
      })}
    </>
  );
};

export default NavButtons;
